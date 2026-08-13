import type { ChartCandle, PatternBias } from '@/types'
import { NISON_NEEDS_CONFIRM } from '@/data/nison'

export type SignalSide = 'buy' | 'sell' | 'neutral'

export interface PatternSignal {
  patternId: string
  patternName: string
  side: SignalSide
  start: number
  end: number
  time: string
  price: number
  message: string
  /** 尼森：单根/较弱形态须等下一根确认 */
  needsConfirm: boolean
  /** true=次日已确认，false=次日走反，null=还没有下一根 */
  confirmed: boolean | null
  /** 放量、均线等汇聚提示 */
  confluence: string[]
}

type OHLC = ChartCandle

function body(c: OHLC) {
  return Math.abs(c.close - c.open)
}

function range(c: OHLC) {
  return Math.max(c.high - c.low, 1e-9)
}

function upperWick(c: OHLC) {
  return c.high - Math.max(c.open, c.close)
}

function lowerWick(c: OHLC) {
  return Math.min(c.open, c.close) - c.low
}

function isBull(c: OHLC) {
  return c.close > c.open
}

function isBear(c: OHLC) {
  return c.close < c.open
}

function mid(c: OHLC) {
  return (c.open + c.close) / 2
}

function isDojiLike(c: OHLC, ar: number) {
  return body(c) <= range(c) * 0.12 && range(c) >= ar * 0.5
}

function bodyInside(inner: OHLC, outer: OHLC) {
  const oTop = Math.max(outer.open, outer.close)
  const oBot = Math.min(outer.open, outer.close)
  const iTop = Math.max(inner.open, inner.close)
  const iBot = Math.min(inner.open, inner.close)
  return iTop <= oTop && iBot >= oBot && body(inner) < body(outer) * 0.65
}

function bodyTop(c: OHLC) {
  return Math.max(c.open, c.close)
}

function bodyBot(c: OHLC) {
  return Math.min(c.open, c.close)
}

function sma(series: OHLC[], end: number, n: number) {
  if (end + 1 < n) return null
  let sum = 0
  for (let i = end - n + 1; i <= end; i++) sum += series[i].close
  return sum / n
}

function avgVol(series: OHLC[], end: number, n: number) {
  const start = Math.max(0, end - n + 1)
  let sum = 0
  let count = 0
  for (let i = start; i <= end; i++) {
    const v = series[i].volume
    if (v && v > 0) {
      sum += v
      count += 1
    }
  }
  return count ? sum / count : 0
}

function avgRange(series: OHLC[], end: number, n = 10) {
  const start = Math.max(0, end - n + 1)
  let sum = 0
  let count = 0
  for (let i = start; i <= end; i++) {
    sum += range(series[i])
    count += 1
  }
  return sum / Math.max(count, 1)
}

/** 近段收盘斜率：>0 偏多，<0 偏空 */
function trendScore(series: OHLC[], end: number, lookback = 8) {
  const start = Math.max(0, end - lookback)
  if (end <= start) return 0
  return series[end].close - series[start].close
}

function push(
  out: PatternSignal[],
  series: OHLC[],
  patternId: string,
  patternName: string,
  side: SignalSide,
  start: number,
  end: number,
  message: string,
) {
  const c = series[end]
  out.push({
    patternId,
    patternName,
    side,
    start,
    end,
    time: c.time,
    price: c.close,
    message,
    needsConfirm: false,
    confirmed: true,
    confluence: [],
  })
}

function detectAt(series: OHLC[], i: number): PatternSignal[] {
  const out: PatternSignal[] = []
  if (i < 1) return out
  const c = series[i]
  const p = series[i - 1]
  const ar = avgRange(series, i)
  const trend = trendScore(series, i - 1)
  const b = body(c)
  const r = range(c)

  // 第八章：十字线变体。图上十字过多则普通十字失效；顶部效力大于底部
  if (isDojiLike(c, ar)) {
    let nearbyDoji = 0
    for (let j = Math.max(0, i - 8); j < i; j++) {
      if (isDojiLike(series[j], ar)) nearbyDoji += 1
    }
    const crowded = nearbyDoji >= 3
    const uw = upperWick(c)
    const lw = lowerWick(c)
    if (uw >= r * 0.62 && lw <= r * 0.12 && trend > ar) {
      push(out, series, 'gravestone-doji', '墓碑十字线', 'sell', i, i, '高位墓碑十字，冲高回吐，关注卖点')
    } else if (lw >= r * 0.62 && uw <= r * 0.12 && trend < -ar) {
      push(out, series, 'dragonfly-doji', '蜻蜓十字线', 'buy', i, i, '低位蜻蜓十字，下探被拉回，须看次日确认')
    } else if (uw >= r * 0.28 && lw >= r * 0.28 && r >= ar * 0.9) {
      const side = trend > ar ? 'sell' : trend < -ar ? 'buy' : 'neutral'
      push(
        out,
        series,
        'long-legged-doji',
        '长腿十字线',
        side,
        i,
        i,
        '长腿十字（黄包车夫），多空剧烈拉锯，观察变盘',
      )
    } else if (!crowded && trend > ar * 2) {
      const afterWhite = isBull(p) && body(p) >= ar * 0.85
      push(
        out,
        series,
        'doji',
        '北方十字线',
        'sell',
        i,
        i,
        afterWhite
          ? '长阳之后出现十字线，顶部警告更强，须看次日'
          : '上涨中的十字线（北方十字线），买盘犹豫，须看次日',
      )
    } else if (!crowded && trend < -ar * 2) {
      push(out, series, 'doji', '十字线', 'neutral', i, i, '下跌中十字线作底部信号较弱，须等次日确认')
    }
  }

  // 第四章：伞形线——实体靠上端；下影理想为实体 2 倍，1.6 倍且几乎无上影也可参考
  const lowerOk =
    lowerWick(c) >= b * 2 || (lowerWick(c) >= b * 1.6 && upperWick(c) <= r * 0.08 && b <= r * 0.35)
  const umbrella =
    lowerOk &&
    upperWick(c) <= b * 0.45 &&
    b >= ar * 0.12 &&
    b <= r * 0.45 &&
    r >= ar * 0.7 &&
    bodyTop(c) >= c.low + r * 0.62
  if (umbrella) {
    if (trend < -ar * 1.5) {
      push(out, series, 'hammer', '锤子线', 'buy', i, i, '下跌后伞形线（锤子），下影显示承接，须看次日确认')
    } else if (trend > ar * 1.5) {
      push(out, series, 'hanging-man', '上吊线', 'sell', i, i, '上涨后伞形线（上吊），尼森强调须等次日确认')
    }
  }

  // 第五章：流星形态 / 倒锤子形态——实体靠区间下部
  const starWick =
    upperWick(c) >= b * 2 &&
    lowerWick(c) <= b * 0.4 &&
    b >= ar * 0.12 &&
    b <= r * 0.45 &&
    r >= ar * 0.7 &&
    bodyBot(c) <= c.high - r * 0.62
  if (starWick) {
    if (trend > ar * 1.5) {
      push(out, series, 'shooting-star', '流星形态', 'sell', i, i, '上涨后流星形态，上方受阻，次日走弱更有效')
    } else if (trend < -ar * 1.5) {
      push(out, series, 'inverted-hammer', '倒锤子形态', 'buy', i, i, '下跌后倒锤子，尼森强调必须次日确认')
    }
  }

  // 第六章：捉腰带线
  if (isBull(c) && lowerWick(c) <= r * 0.05 && b >= ar * 0.8 && trend < -ar) {
    push(out, series, 'bullish-belt-hold', '看涨捉腰带线', 'buy', i, i, '低开后强势收阳，捉腰带线买点')
  }
  if (isBear(c) && upperWick(c) <= r * 0.05 && b >= ar * 0.8 && trend > ar) {
    push(out, series, 'bearish-belt-hold', '看跌捉腰带线', 'sell', i, i, '高开后强势收阴，捉腰带线卖点')
  }

  // 第四章：吞没形态（抱线）——看实体，第一根不宜是十字
  const engulfBull =
    isBear(p) &&
    isBull(c) &&
    !isDojiLike(p, ar) &&
    body(p) >= ar * 0.35 &&
    c.open <= p.close &&
    c.close >= p.open &&
    body(c) > body(p) * 1.05 &&
    trend < -ar * 0.4
  const engulfBear =
    isBull(p) &&
    isBear(c) &&
    !isDojiLike(p, ar) &&
    body(p) >= ar * 0.35 &&
    c.open >= p.close &&
    c.close <= p.open &&
    body(c) > body(p) * 1.05 &&
    trend > ar * 0.4
  if (engulfBull) {
    push(out, series, 'bullish-engulfing', '看涨吞没形态', 'buy', i - 1, i, '阳线抱住前阴，反转买点信号')
  }
  if (engulfBear) {
    push(out, series, 'bearish-engulfing', '看跌吞没形态', 'sell', i - 1, i, '阴线抱住前阳，反转卖点信号')
  }

  // 第六章：孕线形态（与吞没互斥）
  if (!engulfBull && !engulfBear && body(p) >= ar * 0.7 && bodyInside(c, p)) {
    const cross = isDojiLike(c, ar)
    if (isBear(p) && trend < -ar) {
      push(
        out,
        series,
        cross ? 'bullish-harami-cross' : 'bullish-harami',
        cross ? '看涨十字孕线形态' : '看涨孕线形态',
        'buy',
        i - 1,
        i,
        cross ? '大阴后十字孕线，空头动能显著减弱' : '大阴后孕线，下跌动能减弱，关注买点',
      )
    } else if (isBull(p) && trend > ar) {
      push(
        out,
        series,
        cross ? 'bearish-harami-cross' : 'bearish-harami',
        cross ? '看跌十字孕线形态' : '看跌孕线形态',
        'sell',
        i - 1,
        i,
        cross ? '大阳后十字孕线，买盘信心动摇' : '大阳后孕线，上涨动能减弱，关注卖点',
      )
    }
  }

  // 第四章：刺透 / 乌云盖顶
  const piercing =
    isBear(p) &&
    isBull(c) &&
    c.open < p.low &&
    c.close > mid(p) &&
    c.close < p.open
  const darkCloud =
    isBull(p) &&
    isBear(c) &&
    c.open > p.high &&
    c.close < mid(p) &&
    c.close > p.open
  if (piercing) {
    push(out, series, 'piercing-line', '刺透形态', 'buy', i - 1, i, '低开后收复前阴一半以上，买点信号')
  }
  if (darkCloud) {
    push(out, series, 'dark-cloud-cover', '乌云盖顶形态', 'sell', i - 1, i, '高开后跌破前阳一半，卖点信号')
  }

  // 第六章：反击线 / 约会线（收盘相近，未达到刺透/乌云深度）
  const meet = Math.abs(c.close - p.close) <= ar * 0.1
  if (!piercing && isBear(p) && isBull(c) && c.open < p.close && meet && trend < -ar) {
    push(out, series, 'bullish-counterattack', '看涨反击线形态', 'buy', i - 1, i, '低开收至前收附近（约会线），关注买点')
  }
  if (!darkCloud && isBull(p) && isBear(c) && c.open > p.close && meet && trend > ar) {
    push(out, series, 'bearish-counterattack', '看跌反击线形态', 'sell', i - 1, i, '高开收至前收附近（约会线），关注卖点')
  }

  // 第六章：平头顶部 / 平头底部
  if (Math.abs(p.high - c.high) <= ar * 0.08 && trend > ar && isBear(c)) {
    push(out, series, 'tweezers-top', '平头顶部形态', 'sell', i - 1, i, '连续相近高点受阻，平头顶部关注卖点')
  }
  if (Math.abs(p.low - c.low) <= ar * 0.08 && trend < -ar && isBull(c)) {
    push(out, series, 'tweezers-bottom', '平头底部形态', 'buy', i - 1, i, '连续相近低点获撑，平头底部关注买点')
  }

  if (i < 2) return out
  const a = series[i - 2]

  // 第五章：启明星 / 黄昏星；星线最好与第一根实体有缺口
  const starSmall = body(p) <= Math.max(body(a), body(c)) * 0.45
  const starDoji = isDojiLike(p, ar) || body(p) <= range(p) * 0.15
  const morningGap = bodyTop(p) <= bodyBot(a) + ar * 0.05
  const eveningGap = bodyBot(p) >= bodyTop(a) - ar * 0.05
  if (
    isBear(a) &&
    body(a) >= ar * 0.7 &&
    starSmall &&
    morningGap &&
    isBull(c) &&
    c.close > mid(a) &&
    trend < -ar
  ) {
    if (starDoji) {
      push(out, series, 'morning-doji-star', '十字启明星形态', 'buy', i - 2, i, '下跌后十字启明星，第三根已带确认')
    } else {
      push(out, series, 'morning-star', '启明星形态', 'buy', i - 2, i, '下跌后启明星，第三根深入第一根实体')
    }
  }
  if (
    isBull(a) &&
    body(a) >= ar * 0.7 &&
    starSmall &&
    eveningGap &&
    isBear(c) &&
    c.close < mid(a) &&
    trend > ar
  ) {
    if (starDoji) {
      push(out, series, 'evening-doji-star', '十字黄昏星形态', 'sell', i - 2, i, '上涨后十字黄昏星，第三根已带确认')
    } else {
      push(out, series, 'evening-star', '黄昏星形态', 'sell', i - 2, i, '上涨后黄昏星，第三根深入第一根实体')
    }
  }

  // 第八章：三星形态
  if (isDojiLike(a, ar) && isDojiLike(p, ar) && isDojiLike(c, ar)) {
    if (trend < -ar && p.low <= Math.min(a.low, c.low) + ar * 0.05) {
      push(out, series, 'tri-star-bullish', '看涨三星形态', 'buy', i - 2, i, '下跌末端三根十字，罕见底部三星')
    } else if (trend > ar && p.high >= Math.max(a.high, c.high) - ar * 0.05) {
      push(out, series, 'tri-star-bearish', '看跌三星形态', 'sell', i - 2, i, '上涨末端三根十字，罕见顶部三星')
    }
  }

  // 第六章：白色三兵挺进 / 三只乌鸦
  const soldiers =
    isBull(a) &&
    isBull(p) &&
    isBull(c) &&
    body(a) >= ar * 0.55 &&
    body(p) >= ar * 0.55 &&
    body(c) >= ar * 0.55 &&
    a.close < p.close &&
    p.close < c.close &&
    p.open >= Math.min(a.open, a.close) &&
    p.open <= Math.max(a.open, a.close) &&
    c.open >= Math.min(p.open, p.close) &&
    c.open <= Math.max(p.open, p.close)
  const crows =
    isBear(a) &&
    isBear(p) &&
    isBear(c) &&
    body(a) >= ar * 0.55 &&
    body(p) >= ar * 0.55 &&
    body(c) >= ar * 0.55 &&
    a.close > p.close &&
    p.close > c.close
  if (soldiers && trend < ar) {
    push(out, series, 'three-white-soldiers', '白色三兵挺进形态', 'buy', i - 2, i, '连续三根坚挺阳线，反转买点')
  }
  if (crows && trend > -ar) {
    push(out, series, 'three-black-crows', '三只乌鸦', 'sell', i - 2, i, '连续三根阴线压制，反转卖点')
  }

  // 第六章：向上跳空两只乌鸦
  if (
    isBull(a) &&
    body(a) >= ar * 0.7 &&
    isBear(p) &&
    isBear(c) &&
    p.low > a.high &&
    c.open >= p.open &&
    c.close <= p.close &&
    c.close > a.close &&
    trend > ar
  ) {
    push(out, series, 'upside-gap-two-crows', '向上跳空两只乌鸦', 'sell', i - 2, i, '高位跳空双鸦，买盘跟进不足')
  }

  // 第七章：向上 / 向下窗口
  const gapUp = c.low - p.high
  const gapDown = p.low - c.high
  const minGap = Math.max(ar * 0.18, Math.abs(p.close) * 0.003)
  if (gapUp >= minGap && trend > ar * 0.4) {
    push(out, series, 'rising-window', '向上窗口', 'buy', i - 1, i, '向上跳空窗口，未回补前多视为支撑')
  }
  if (gapDown >= minGap && trend < -ar * 0.4) {
    push(out, series, 'falling-window', '向下窗口', 'sell', i - 1, i, '向下跳空窗口，未回补前多视为压力')
  }

  // 第七章：向上 / 向下跳空并列阴阳线
  const gapAP = p.low - a.high
  const gapAPdn = a.low - p.high
  const sideBySide =
    Math.abs(body(c) - body(p)) <= Math.max(body(p), ar) * 0.45 &&
    Math.abs(c.open - p.open) <= ar * 0.35
  if (isBull(a) && gapAP >= minGap && sideBySide && Math.min(p.low, c.low) > a.high && trend > ar * 0.3) {
    push(
      out,
      series,
      'upside-gap-side-by-side',
      '向上跳空并列阴阳线形态',
      'buy',
      i - 2,
      i,
      '跳空后并列整理且缺口仍在，上升持续',
    )
  }
  if (isBear(a) && gapAPdn >= minGap && sideBySide && Math.max(p.high, c.high) < a.low && trend < -ar * 0.3) {
    push(
      out,
      series,
      'downside-gap-side-by-side',
      '向下跳空并列阴阳线形态',
      'sell',
      i - 2,
      i,
      '跳空后并列整理且缺口仍在，下降持续',
    )
  }

  // 第七章：看涨 / 看跌分手线形态
  const sameOpen = Math.abs(c.open - p.open) <= Math.max(ar * 0.08, Math.abs(p.open) * 0.002)
  if (
    sameOpen &&
    isBear(p) &&
    isBull(c) &&
    body(c) >= ar * 0.7 &&
    trend > ar * 0.5
  ) {
    push(out, series, 'bullish-separating-lines', '看涨分手线形态', 'buy', i - 1, i, '同开盘分手后收阳，上升持续')
  }
  if (
    sameOpen &&
    isBull(p) &&
    isBear(c) &&
    body(c) >= ar * 0.7 &&
    trend < -ar * 0.5
  ) {
    push(out, series, 'bearish-separating-lines', '看跌分手线形态', 'sell', i - 1, i, '同开盘分手后收阴，下降持续')
  }

  // 第七章：上升 / 下降三法（5 根）
  if (i >= 4) {
    const first = series[i - 4]
    const m1 = series[i - 3]
    const m2 = series[i - 2]
    const m3 = series[i - 1]
    const last = c
    const mids = [m1, m2, m3]
    const small = (bar: OHLC) => body(bar) <= body(first) * 0.55 && range(bar) <= range(first) * 0.9
    if (
      isBull(first) &&
      body(first) >= ar * 0.9 &&
      isBull(last) &&
      body(last) >= ar * 0.8 &&
      last.close > first.close &&
      mids.every(small) &&
      mids.every((bar) => bar.high <= first.high + ar * 0.05 && bar.low >= first.low - ar * 0.05) &&
      mids.some((bar) => isBear(bar) || bar.close < first.close)
    ) {
      push(
        out,
        series,
        'rising-three-methods',
        '上升三法形态',
        'buy',
        i - 4,
        i,
        '大阳后三根小实体回踩未破，再阳突破，上升持续',
      )
    }
    if (
      isBear(first) &&
      body(first) >= ar * 0.9 &&
      isBear(last) &&
      body(last) >= ar * 0.8 &&
      last.close < first.close &&
      mids.every(small) &&
      mids.every((bar) => bar.high <= first.high + ar * 0.05 && bar.low >= first.low - ar * 0.05) &&
      mids.some((bar) => isBull(bar) || bar.close > first.close)
    ) {
      push(
        out,
        series,
        'falling-three-methods',
        '下降三法形态',
        'sell',
        i - 4,
        i,
        '大阴后三根小实体反弹未破，再阴突破，下降持续',
      )
    }
  }

  // 第十一章：破低反涨 / 破高反跌
  if (i >= 8) {
    const from = Math.max(0, i - 12)
    let priorLow = Infinity
    let priorHigh = -Infinity
    for (let j = from; j < i; j++) {
      priorLow = Math.min(priorLow, series[j].low)
      priorHigh = Math.max(priorHigh, series[j].high)
    }
    const pierce = Math.max(ar * 0.08, Math.abs(c.close) * 0.002)
    if (
      Number.isFinite(priorLow) &&
      c.low < priorLow - pierce &&
      c.close > priorLow &&
      isBull(c) &&
      trend < ar * 0.2
    ) {
      push(out, series, 'break-low-rally', '破低反涨形态', 'buy', i, i, '刺破近期低点后收回，假跌破关注买点')
    }
    if (
      Number.isFinite(priorHigh) &&
      c.high > priorHigh + pierce &&
      c.close < priorHigh &&
      isBear(c) &&
      trend > -ar * 0.2
    ) {
      push(out, series, 'break-high-fall', '破高反跌形态', 'sell', i, i, '刺破近期高点后收回，假突破关注卖点')
    }
  }

  return out
}

/** 扫描区间内形态信号；默认看最近 lookback 根 */
export function scanPatternSignals(
  series: OHLC[],
  lookback = 20,
): PatternSignal[] {
  if (series.length < 3) return []
  const from = Math.max(2, series.length - lookback)
  const map = new Map<string, PatternSignal>()
  for (let i = from; i < series.length; i++) {
    for (const sig of detectAt(series, i)) {
      const key = `${sig.patternId}-${sig.time}-${sig.side}`
      map.set(key, sig)
    }
  }
  const list = [...map.values()].map((sig) => enrichSignal(series, sig))
  return list.sort((a, b) => {
    const score = (s: PatternSignal) =>
      (s.confirmed === true ? 8 : s.confirmed === null ? 3 : 0) +
      s.confluence.length * 2 +
      (s.end - s.start)
    if (b.end !== a.end) return b.end - a.end
    return score(b) - score(a)
  })
}

function enrichSignal(series: OHLC[], sig: PatternSignal): PatternSignal {
  const needsConfirm = NISON_NEEDS_CONFIRM.has(sig.patternId)
  const bar = series[sig.end]
  const next = series[sig.end + 1]
  let confirmed: boolean | null = true
  if (needsConfirm) {
    if (!next) confirmed = null
    else if (sig.patternId === 'hanging-man') {
      confirmed =
        next.open < Math.min(bar.open, bar.close) || (isBear(next) && next.close < bar.close)
    } else if (sig.patternId === 'hammer' || sig.patternId === 'inverted-hammer' || sig.patternId === 'dragonfly-doji') {
      confirmed = isBull(next) && next.close > bar.close
    } else if (sig.side === 'buy') confirmed = next.close > bar.close || isBull(next)
    else if (sig.side === 'sell') confirmed = next.close < bar.close || isBear(next)
    else confirmed = null
  }

  const confluence: string[] = []
  const vol = bar.volume ?? 0
  const volAvg = avgVol(series, sig.end - 1, 10)
  if (vol > 0 && volAvg > 0 && vol >= volAvg * 1.3) confluence.push('放量')
  const ma20 = sma(series, sig.end, 20)
  if (ma20 != null) {
    if (sig.side === 'buy' && bar.close >= ma20) confluence.push('站上20日线')
    if (sig.side === 'sell' && bar.close <= ma20) confluence.push('跌破20日线')
  }

  const extra = [
    needsConfirm
      ? confirmed === true
        ? '次日已确认'
        : confirmed === false
          ? '次日未确认'
          : '待次日确认'
      : '',
    ...confluence,
  ].filter(Boolean)
  const message = extra.length ? `${sig.message}（${extra.join(' · ')}）` : sig.message

  return { ...sig, needsConfirm, confirmed, confluence, message }
}

export function confirmLabel(sig: PatternSignal) {
  if (!sig.needsConfirm) return '形态内完成'
  if (sig.confirmed === true) return '次日已确认'
  if (sig.confirmed === false) return '次日未确认'
  return '待次日确认'
}

/** 同一根 K 线只留一个标签，避免重叠；买点优先于卖点 */
export function signalsToChartMarkers(
  signals: PatternSignal[],
  series: OHLC[],
): Array<{
  time: string
  position: 'aboveBar' | 'belowBar'
  color: string
  shape: 'arrowUp' | 'arrowDown' | 'circle'
  text: string
}> {
  const byEnd = new Map<number, PatternSignal>()
  for (const sig of signals) {
    const prev = byEnd.get(sig.end)
    if (!prev) {
      byEnd.set(sig.end, sig)
      continue
    }
    const rank = (s: PatternSignal) =>
      (s.confirmed === true ? 12 : s.confirmed === null ? 4 : 0) +
      s.confluence.length * 3 +
      (s.side === 'buy' ? 2 : s.side === 'sell' ? 1 : 0) * 10 +
      (s.end - s.start)
    if (rank(sig) > rank(prev)) byEnd.set(sig.end, sig)
  }

  return [...byEnd.values()].map((sig) => {
    const bar = series[sig.end]
    const buy = sig.side === 'buy'
    const pending = sig.needsConfirm && sig.confirmed !== true
    return {
      time: bar?.time ?? sig.time,
      position: buy ? 'belowBar' : 'aboveBar',
      color: buy ? '#e35d5d' : '#25a86b',
      shape: buy ? 'arrowUp' : 'arrowDown',
      text: pending ? `${sig.patternName}·待` : sig.patternName,
    }
  })
}

export function sideLabel(side: SignalSide) {
  if (side === 'buy') return '买点'
  if (side === 'sell') return '卖点'
  return '观察'
}

export function sideToBias(side: SignalSide): PatternBias {
  if (side === 'buy') return 'bullish'
  if (side === 'sell') return 'bearish'
  return 'neutral'
}
