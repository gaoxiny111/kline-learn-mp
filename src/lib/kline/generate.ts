import type { Candle, ChartCandle } from '@/types'
import { getPatternById } from '@/data/patterns'
import { createRng, randBetween, randInt } from './rng'

function candle(open: number, high: number, low: number, close: number): Candle {
  const h = Math.max(open, high, low, close)
  const l = Math.min(open, high, low, close)
  return {
    open: +open.toFixed(2),
    high: +h.toFixed(2),
    low: +l.toFixed(2),
    close: +close.toFixed(2),
  }
}

export function generateBaseSeries(seed: number, length: number, startPrice = 100): Candle[] {
  const rng = createRng(seed)
  const series: Candle[] = []
  let price = startPrice

  for (let i = 0; i < length; i++) {
    const drift = randBetween(rng, -1.2, 1.2)
    const open = price
    const close = Math.max(5, open + drift)
    const wickTop = randBetween(rng, 0.1, 0.9)
    const wickBot = randBetween(rng, 0.1, 0.9)
    const high = Math.max(open, close) + wickTop
    const low = Math.min(open, close) - wickBot
    series.push(candle(open, high, low, close))
    price = close
  }
  return series
}

function makeHammerLike(base: number, bullishContext: boolean, rng: () => number): Candle {
  const body = randBetween(rng, 0.4, 1.0)
  const lower = body * randBetween(rng, 2.2, 3.2)
  const upper = randBetween(rng, 0.05, 0.25)
  const open = bullishContext ? base : base + body * 0.4
  const close = bullishContext ? base + body : base
  const low = Math.min(open, close) - lower
  const high = Math.max(open, close) + upper
  return candle(open, high, low, close)
}

function makeShootingLike(base: number, rng: () => number): Candle {
  const body = randBetween(rng, 0.4, 1.0)
  const upper = body * randBetween(rng, 2.2, 3.2)
  const lower = randBetween(rng, 0.05, 0.25)
  const open = base + body * 0.6
  const close = base
  const high = Math.max(open, close) + upper
  const low = Math.min(open, close) - lower
  return candle(open, high, low, close)
}

function makeDoji(base: number, rng: () => number): Candle {
  const open = base
  const close = base + randBetween(rng, -0.08, 0.08)
  const upper = randBetween(rng, 0.6, 1.6)
  const lower = randBetween(rng, 0.6, 1.6)
  return candle(open, Math.max(open, close) + upper, Math.min(open, close) - lower, close)
}

function trendDown(series: Candle[], end: number, bars: number, rng: () => number) {
  let p = series[Math.max(0, end - bars)]?.close ?? 100
  for (let i = end - bars; i < end; i++) {
    if (i < 0) continue
    const open = p
    const close = open - randBetween(rng, 0.8, 1.8)
    series[i] = candle(open, open + randBetween(rng, 0.1, 0.4), close - randBetween(rng, 0.1, 0.5), close)
    p = close
  }
  return p
}

function trendUp(series: Candle[], end: number, bars: number, rng: () => number) {
  let p = series[Math.max(0, end - bars)]?.close ?? 100
  for (let i = end - bars; i < end; i++) {
    if (i < 0) continue
    const open = p
    const close = open + randBetween(rng, 0.8, 1.8)
    series[i] = candle(open, close + randBetween(rng, 0.1, 0.5), open - randBetween(rng, 0.1, 0.4), close)
    p = close
  }
  return p
}

export interface EmbedResult {
  series: Candle[]
  start: number
  end: number
}

export function embedPattern(seriesIn: Candle[], patternId: string, atIndex: number, seed = 1): EmbedResult {
  const series = seriesIn.map((c) => ({ ...c }))
  const rng = createRng(seed + atIndex * 97)
  const n = series.length
  const barsNeeded = Math.min(getPatternById(patternId)?.bars ?? 1, n - 5)
  let start = Math.min(Math.max(atIndex, 4), Math.max(4, n - barsNeeded - 2))
  const end = start + barsNeeded - 1

  switch (patternId) {
    case 'hammer': {
      const base = trendDown(series, start, 4, rng)
      series[start] = makeHammerLike(base, true, rng)
      break
    }
    case 'hanging-man': {
      const base = trendUp(series, start, 4, rng)
      series[start] = makeHammerLike(base, false, rng)
      break
    }
    case 'doji': {
      const base = series[start - 1]?.close ?? 100
      series[start] = makeDoji(base, rng)
      break
    }
    case 'long-legged-doji': {
      const base = series[start - 1]?.close ?? 100
      const open = base
      const close = base + randBetween(rng, -0.05, 0.05)
      series[start] = candle(open, open + 2.4, open - 2.4, close)
      break
    }
    case 'gravestone-doji': {
      const base = trendUp(series, start, 4, rng)
      series[start] = candle(base, base + 2.8, base - 0.05, base + 0.02)
      break
    }
    case 'dragonfly-doji': {
      const base = trendDown(series, start, 4, rng)
      series[start] = candle(base, base + 0.05, base - 2.8, base - 0.02)
      break
    }
    case 'shooting-star': {
      const base = trendUp(series, start, 4, rng)
      series[start] = makeShootingLike(base, rng)
      break
    }
    case 'inverted-hammer': {
      const base = trendDown(series, start, 4, rng)
      series[start] = makeShootingLike(base, rng)
      break
    }
    case 'bullish-engulfing': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.3, p - 1.8, p - 1.5)
      const c2 = candle(c1.close - 0.2, c1.open + 1.2, c1.close - 0.3, c1.open + 1.0)
      series[start] = c1
      series[start + 1] = c2
      break
    }
    case 'bearish-engulfing': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 1.5, p - 0.3, p + 1.2)
      const c2 = candle(c1.close + 0.2, c1.close + 0.4, c1.open - 1.0, c1.open - 0.8)
      series[start] = c1
      series[start + 1] = c2
      break
    }
    case 'bullish-harami': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.2, p - 2.2, p - 2.0)
      const mid = (c1.open + c1.close) / 2
      const c2 = candle(mid - 0.2, mid + 0.35, mid - 0.35, mid + 0.25)
      series[start] = c1
      series[start + 1] = c2
      break
    }
    case 'bearish-harami': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.2, p - 0.2, p + 2.0)
      const mid = (c1.open + c1.close) / 2
      const c2 = candle(mid + 0.2, mid + 0.35, mid - 0.35, mid - 0.25)
      series[start] = c1
      series[start + 1] = c2
      break
    }
    case 'piercing-line': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.2, p - 2.0, p - 1.8)
      const open2 = c1.close - 0.5
      const close2 = c1.open - (c1.open - c1.close) * 0.35
      series[start] = c1
      series[start + 1] = candle(open2, close2 + 0.2, open2 - 0.2, close2)
      break
    }
    case 'dark-cloud-cover': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.0, p - 0.2, p + 1.8)
      const open2 = c1.close + 0.5
      const close2 = c1.open + (c1.close - c1.open) * 0.35
      series[start] = c1
      series[start + 1] = candle(open2, open2 + 0.2, close2 - 0.2, close2)
      break
    }
    case 'bullish-counterattack': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.2, p - 2.0, p - 1.8)
      const open2 = c1.close - 1.2
      const close2 = c1.close
      series[start] = c1
      series[start + 1] = candle(open2, close2 + 0.15, open2 - 0.15, close2)
      break
    }
    case 'bearish-counterattack': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.0, p - 0.2, p + 1.8)
      const open2 = c1.close + 1.2
      const close2 = c1.close
      series[start] = c1
      series[start + 1] = candle(open2, open2 + 0.15, close2 - 0.15, close2)
      break
    }
    case 'morning-star': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.2, p - 2.0, p - 1.8)
      const c2 = makeDoji(c1.close - 0.3, rng)
      const c3 = candle(c2.close + 0.1, c1.open + 0.3, c2.low - 0.1, c1.open - 0.2)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'evening-star': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.0, p - 0.2, p + 1.8)
      const c2 = makeDoji(c1.close + 0.3, rng)
      const c3 = candle(c2.close - 0.1, c2.high + 0.1, c1.open - 0.3, c1.open + 0.2)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'three-white-soldiers': {
      let p = trendDown(series, start, 2, rng)
      for (let i = 0; i < 3; i++) {
        const open = p + randBetween(rng, -0.2, 0.3)
        const close = open + randBetween(rng, 1.2, 1.8)
        series[start + i] = candle(open, close + 0.15, open - 0.15, close)
        p = close
      }
      break
    }
    case 'three-black-crows': {
      let p = trendUp(series, start, 2, rng)
      for (let i = 0; i < 3; i++) {
        const open = p + randBetween(rng, -0.3, 0.2)
        const close = open - randBetween(rng, 1.2, 1.8)
        series[start + i] = candle(open, open + 0.15, close - 0.15, close)
        p = close
      }
      break
    }
    case 'rising-window': {
      const p = trendUp(series, start, 2, rng)
      const c1 = candle(p, p + 1.2, p - 0.2, p + 1.0)
      const open2 = c1.high + 0.8
      const close2 = open2 + 1.0
      series[start] = c1
      series[start + 1] = candle(open2, close2 + 0.2, open2 - 0.1, close2)
      break
    }
    case 'falling-window': {
      const p = trendDown(series, start, 2, rng)
      const c1 = candle(p, p + 0.2, p - 1.2, p - 1.0)
      const open2 = c1.low - 0.8
      const close2 = open2 - 1.0
      series[start] = c1
      series[start + 1] = candle(open2, open2 + 0.1, close2 - 0.2, close2)
      break
    }
    case 'upside-gap-side-by-side': {
      let p = trendUp(series, start, 2, rng)
      const c0 = candle(p, p + 1.0, p - 0.1, p + 0.9)
      const open1 = c0.high + 0.7
      const close1 = open1 + 1.1
      const c1 = candle(open1, close1 + 0.1, open1 - 0.1, close1)
      const c2 = candle(close1 + 0.1, close1 + 0.3, open1 - 0.05, open1 + 0.15)
      series[start] = c0
      series[start + 1] = c1
      series[start + 2] = c2
      break
    }
    case 'downside-gap-side-by-side': {
      let p = trendDown(series, start, 2, rng)
      const c0 = candle(p, p + 0.1, p - 1.0, p - 0.9)
      const open1 = c0.low - 0.7
      const close1 = open1 - 1.1
      const c1 = candle(open1, open1 + 0.1, close1 - 0.1, close1)
      const c2 = candle(close1 - 0.1, open1 + 0.05, close1 - 0.3, open1 - 0.15)
      series[start] = c0
      series[start + 1] = c1
      series[start + 2] = c2
      break
    }
    case 'rising-three-methods': {
      let p = trendUp(series, start, 2, rng)
      const bigOpen = p
      const bigClose = p + 3.2
      series[start] = candle(bigOpen, bigClose + 0.2, bigOpen - 0.15, bigClose)
      let cur = bigClose - 0.2
      for (let i = 1; i <= 3; i++) {
        const open = cur
        const close = open - randBetween(rng, 0.35, 0.7)
        series[start + i] = candle(open, open + 0.15, close - 0.1, close)
        cur = close
      }
      const lastOpen = cur + 0.1
      const lastClose = bigClose + 0.9
      series[start + 4] = candle(lastOpen, lastClose + 0.15, lastOpen - 0.1, lastClose)
      break
    }
    case 'falling-three-methods': {
      let p = trendDown(series, start, 2, rng)
      const bigOpen = p
      const bigClose = p - 3.2
      series[start] = candle(bigOpen, bigOpen + 0.15, bigClose - 0.2, bigClose)
      let cur = bigClose + 0.2
      for (let i = 1; i <= 3; i++) {
        const open = cur
        const close = open + randBetween(rng, 0.35, 0.7)
        series[start + i] = candle(open, close + 0.1, open - 0.15, close)
        cur = close
      }
      const lastOpen = cur - 0.1
      const lastClose = bigClose - 0.9
      series[start + 4] = candle(lastOpen, lastOpen + 0.1, lastClose - 0.15, lastClose)
      break
    }
    case 'bullish-separating-lines': {
      const p = trendUp(series, start, 2, rng)
      const open = p + 0.8
      const c1 = candle(open, open + 0.2, open - 1.6, open - 1.4)
      const c2 = candle(open, open + 1.8, open - 0.15, open + 1.6)
      series[start] = c1
      series[start + 1] = c2
      break
    }
    case 'bearish-separating-lines': {
      const p = trendDown(series, start, 2, rng)
      const open = p - 0.8
      const c1 = candle(open, open + 1.6, open - 0.2, open + 1.4)
      const c2 = candle(open, open + 0.15, open - 1.8, open - 1.6)
      series[start] = c1
      series[start + 1] = c2
      break
    }
    case 'three-mountains': {
      let p = trendUp(series, start, 3, rng)
      const peak = p + 2.5
      const valley = peak - 2.2
      const shape = [0.6, 1.4, 2.5, 1.2, 0.3, 1.3, 2.45, 1.1, 0.25, 1.35, 2.4, 0.8]
      for (let i = 0; i < barsNeeded; i++) {
        const target = valley + shape[i] * ((peak - valley) / 2.5)
        const open = p
        const close = target
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.25,
          Math.min(open, close) - 0.25,
          close,
        )
        p = close
      }
      break
    }
    case 'three-rivers': {
      let p = trendDown(series, start, 3, rng)
      const trough = p - 2.5
      const ridge = trough + 2.2
      const shape = [0.6, 1.4, 2.5, 1.2, 0.3, 1.3, 2.45, 1.1, 0.25, 1.35, 2.4, 0.8]
      for (let i = 0; i < barsNeeded; i++) {
        const target = ridge - shape[i] * ((ridge - trough) / 2.5)
        const open = p
        const close = target
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.25,
          Math.min(open, close) - 0.25,
          close,
        )
        p = close
      }
      break
    }
    case 'rounding-top': {
      let p = trendUp(series, start, 3, rng)
      const mid = (barsNeeded - 1) / 2
      for (let i = 0; i < barsNeeded; i++) {
        const t = (i - mid) / mid
        const target = p + 1.2 - t * t * 3.2
        const open = series[start + i - 1]?.close ?? p
        const close = target
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.2,
          Math.min(open, close) - 0.2,
          close,
        )
      }
      break
    }
    case 'rounding-bottom': {
      let p = trendDown(series, start, 3, rng)
      const mid = (barsNeeded - 1) / 2
      let prev = p
      for (let i = 0; i < barsNeeded; i++) {
        const t = (i - mid) / mid
        const target = p - 1.2 + t * t * 3.2
        const open = prev
        const close = target
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.2,
          Math.min(open, close) - 0.2,
          close,
        )
        prev = close
      }
      break
    }
    case 'tower-top': {
      let p = trendUp(series, start, 1, rng)
      for (let i = 0; i < 4; i++) {
        const open = p
        const close = open + 1.4
        series[start + i] = candle(open, close + 0.15, open - 0.1, close)
        p = close
      }
      series[start + 4] = candle(p + 0.2, p + 0.4, p - 2.8, p - 2.5)
      series[start + 5] = candle(p - 2.4, p - 2.2, p - 3.4, p - 3.2)
      break
    }
    case 'tower-bottom': {
      let p = trendDown(series, start, 1, rng)
      for (let i = 0; i < 4; i++) {
        const open = p
        const close = open - 1.4
        series[start + i] = candle(open, open + 0.1, close - 0.15, close)
        p = close
      }
      series[start + 4] = candle(p - 0.2, p + 2.8, p - 0.4, p + 2.5)
      series[start + 5] = candle(p + 2.4, p + 3.4, p + 2.2, p + 3.2)
      break
    }
    case 'spinning-top': {
      const base = series[start - 1]?.close ?? 100
      series[start] = candle(base - 0.25, base + 1.2, base - 1.2, base + 0.25)
      break
    }
    case 'high-wave': {
      const base = series[start - 1]?.close ?? 100
      series[start] = candle(base - 0.1, base + 2.8, base - 2.8, base + 0.1)
      break
    }
    case 'bullish-marubozu': {
      const p = trendUp(series, start, 2, rng)
      series[start] = candle(p, p + 2.4, p, p + 2.4)
      break
    }
    case 'bearish-marubozu': {
      const p = trendDown(series, start, 2, rng)
      series[start] = candle(p, p, p - 2.4, p - 2.4)
      break
    }
    case 'bullish-belt-hold': {
      const p = trendDown(series, start, 4, rng)
      series[start] = candle(p, p + 2.6, p, p + 2.5)
      break
    }
    case 'bearish-belt-hold': {
      const p = trendUp(series, start, 4, rng)
      series[start] = candle(p, p, p - 2.6, p - 2.5)
      break
    }
    case 'tweezers-top': {
      const p = trendUp(series, start, 3, rng)
      const hi = p + 1.8
      series[start] = candle(p, hi, p - 0.2, p + 1.5)
      series[start + 1] = candle(p + 1.4, hi, p + 0.2, p + 0.4)
      break
    }
    case 'tweezers-bottom': {
      const p = trendDown(series, start, 3, rng)
      const lo = p - 1.8
      series[start] = candle(p, p + 0.2, lo, p - 1.5)
      series[start + 1] = candle(p - 1.4, p - 0.2, lo, p - 0.4)
      break
    }
    case 'bullish-harami-cross': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.2, p - 2.4, p - 2.2)
      const mid = (c1.open + c1.close) / 2
      series[start] = c1
      series[start + 1] = candle(mid, mid + 0.5, mid - 0.5, mid + 0.02)
      break
    }
    case 'bearish-harami-cross': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.4, p - 0.2, p + 2.2)
      const mid = (c1.open + c1.close) / 2
      series[start] = c1
      series[start + 1] = candle(mid, mid + 0.5, mid - 0.5, mid - 0.02)
      break
    }
    case 'morning-doji-star': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.2, p - 2.2, p - 2.0)
      const doj = c1.close - 0.7
      const c2 = candle(doj, doj + 0.35, doj - 0.35, doj + 0.02)
      const c3 = candle(c2.close + 0.2, c1.open + 0.2, c2.low, c1.open - 0.3)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'evening-doji-star': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.2, p - 0.2, p + 2.0)
      const doj = c1.close + 0.7
      const c2 = candle(doj, doj + 0.35, doj - 0.35, doj - 0.02)
      const c3 = candle(c2.close - 0.2, c2.high, c1.open - 0.2, c1.open + 0.3)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'abandoned-baby-bullish': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.15, p - 2.0, p - 1.8)
      const doj = c1.low - 0.9
      const c2 = candle(doj, doj + 0.25, doj - 0.25, doj)
      const c3 = candle(c2.high + 0.7, c1.open + 0.1, c2.high + 0.5, c1.open - 0.4)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'abandoned-baby-bearish': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.0, p - 0.15, p + 1.8)
      const doj = c1.high + 0.9
      const c2 = candle(doj, doj + 0.25, doj - 0.25, doj)
      const c3 = candle(c2.low - 0.7, c2.low - 0.5, c1.open - 0.1, c1.open + 0.4)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'matching-low': {
      const p = trendDown(series, start, 3, rng)
      const close = p - 1.6
      series[start] = candle(p, p + 0.15, close - 0.2, close)
      series[start + 1] = candle(close + 0.8, close + 1.0, close - 0.15, close)
      break
    }
    case 'homing-pigeon': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.15, p - 2.4, p - 2.2)
      const mid = (c1.open + c1.close) / 2
      series[start] = c1
      series[start + 1] = candle(mid + 0.35, mid + 0.45, mid - 0.35, mid - 0.25)
      break
    }
    case 'kicking-bullish': {
      const p = trendDown(series, start, 2, rng)
      series[start] = candle(p, p, p - 2.2, p - 2.2)
      const o2 = p - 2.2 + 1.0
      series[start + 1] = candle(o2, o2 + 2.4, o2, o2 + 2.4)
      break
    }
    case 'kicking-bearish': {
      const p = trendUp(series, start, 2, rng)
      series[start] = candle(p, p + 2.2, p, p + 2.2)
      const o2 = p + 2.2 - 1.0
      series[start + 1] = candle(o2, o2, o2 - 2.4, o2 - 2.4)
      break
    }
    case 'two-crows': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.2, p - 0.1, p + 2.0)
      const c2 = candle(c1.high + 0.4, c1.high + 0.7, c1.close + 0.2, c1.close + 0.35)
      const c3 = candle(c2.open + 0.3, c2.open + 0.4, c1.open + 0.4, c1.open + 0.6)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'upside-gap-two-crows': {
      const p = trendUp(series, start, 3, rng)
      const c1 = candle(p, p + 2.0, p - 0.1, p + 1.8)
      const c2 = candle(c1.high + 0.5, c1.high + 0.8, c1.high + 0.2, c1.high + 0.3)
      const c3 = candle(c2.close - 0.1, c2.high + 0.1, c2.open - 0.9, c2.open - 0.7)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'tri-star-bullish': {
      const p = trendDown(series, start, 3, rng)
      series[start] = candle(p, p + 0.5, p - 0.5, p + 0.02)
      series[start + 1] = candle(p - 0.8, p - 0.4, p - 1.2, p - 0.78)
      series[start + 2] = candle(p - 0.2, p + 0.4, p - 0.6, p - 0.18)
      break
    }
    case 'tri-star-bearish': {
      const p = trendUp(series, start, 3, rng)
      series[start] = candle(p, p + 0.5, p - 0.5, p - 0.02)
      series[start + 1] = candle(p + 0.8, p + 1.2, p + 0.4, p + 0.82)
      series[start + 2] = candle(p + 0.2, p + 0.6, p - 0.2, p + 0.22)
      break
    }
    case 'stick-sandwich': {
      const p = trendDown(series, start, 3, rng)
      const close = p - 1.5
      series[start] = candle(p, p + 0.1, close - 0.2, close)
      series[start + 1] = candle(close - 0.2, close + 1.4, close - 0.4, close + 1.2)
      series[start + 2] = candle(close + 1.0, close + 1.1, close - 0.15, close)
      break
    }
    case 'on-neck': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.15, p - 2.2, p - 2.0)
      series[start] = c1
      series[start + 1] = candle(c1.low - 0.5, c1.low + 0.15, c1.low - 0.6, c1.low + 0.05)
      break
    }
    case 'in-neck': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.15, p - 2.2, p - 2.0)
      series[start] = c1
      series[start + 1] = candle(c1.close - 0.6, c1.close + 0.35, c1.close - 0.7, c1.close + 0.25)
      break
    }
    case 'thrusting': {
      const p = trendDown(series, start, 3, rng)
      const c1 = candle(p, p + 0.15, p - 2.4, p - 2.2)
      const close2 = c1.close + (c1.open - c1.close) * 0.35
      series[start] = c1
      series[start + 1] = candle(c1.close - 0.5, close2 + 0.15, c1.close - 0.6, close2)
      break
    }
    case 'upside-tasuki-gap': {
      let p = trendUp(series, start, 2, rng)
      const c1 = candle(p, p + 1.2, p - 0.1, p + 1.1)
      const c2 = candle(c1.high + 0.5, c1.high + 1.5, c1.high + 0.4, c1.high + 1.3)
      const c3 = candle(c2.close - 0.1, c2.close + 0.1, c1.high + 0.15, c1.high + 0.35)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'downside-tasuki-gap': {
      let p = trendDown(series, start, 2, rng)
      const c1 = candle(p, p + 0.1, p - 1.2, p - 1.1)
      const c2 = candle(c1.low - 0.5, c1.low - 0.4, c1.low - 1.5, c1.low - 1.3)
      const c3 = candle(c2.close + 0.1, c1.low - 0.15, c2.close - 0.1, c1.low - 0.35)
      series[start] = c1
      series[start + 1] = c2
      series[start + 2] = c3
      break
    }
    case 'advance-block': {
      let p = trendUp(series, start, 2, rng)
      series[start] = candle(p, p + 1.8, p - 0.1, p + 1.7)
      series[start + 1] = candle(p + 1.5, p + 2.6, p + 1.4, p + 2.2)
      series[start + 2] = candle(p + 2.1, p + 3.2, p + 2.0, p + 2.35)
      break
    }
    case 'deliberation': {
      let p = trendUp(series, start, 2, rng)
      series[start] = candle(p, p + 1.8, p - 0.1, p + 1.7)
      series[start + 1] = candle(p + 1.6, p + 3.3, p + 1.5, p + 3.2)
      const star = p + 3.5
      series[start + 2] = candle(star, star + 0.4, star - 0.3, star + 0.1)
      break
    }
    case 'mat-hold': {
      let p = trendUp(series, start, 2, rng)
      const bigOpen = p
      const bigClose = p + 3.0
      series[start] = candle(bigOpen, bigClose + 0.15, bigOpen - 0.1, bigClose)
      series[start + 1] = candle(bigClose + 0.3, bigClose + 1.0, bigClose + 0.2, bigClose + 0.9)
      let cur = bigClose + 0.8
      for (let i = 2; i <= 3; i++) {
        const open = cur
        const close = open - 0.45
        series[start + i] = candle(open, open + 0.1, close - 0.1, close)
        cur = close
      }
      series[start + 4] = candle(cur + 0.1, bigClose + 1.5, cur, bigClose + 1.4)
      break
    }
    case 'three-line-strike-bullish': {
      let p = trendDown(series, start, 1, rng)
      for (let i = 0; i < 3; i++) {
        const open = p
        const close = open - 1.0
        series[start + i] = candle(open, open + 0.1, close - 0.1, close)
        p = close
      }
      const firstOpen = series[start].open
      series[start + 3] = candle(p - 0.2, firstOpen + 0.3, p - 0.3, firstOpen + 0.2)
      break
    }
    case 'three-line-strike-bearish': {
      let p = trendUp(series, start, 1, rng)
      for (let i = 0; i < 3; i++) {
        const open = p
        const close = open + 1.0
        series[start + i] = candle(open, close + 0.1, open - 0.1, close)
        p = close
      }
      const firstOpen = series[start].open
      series[start + 3] = candle(p + 0.2, p + 0.3, firstOpen - 0.3, firstOpen - 0.2)
      break
    }
    case 'breakaway-bullish': {
      let p = trendDown(series, start, 2, rng)
      const c1 = candle(p, p + 0.1, p - 2.0, p - 1.9)
      series[start] = c1
      series[start + 1] = candle(c1.low - 0.6, c1.low - 0.5, c1.low - 1.4, c1.low - 1.3)
      series[start + 2] = candle(c1.low - 1.2, c1.low - 1.0, c1.low - 1.7, c1.low - 1.5)
      series[start + 3] = candle(c1.low - 1.4, c1.low - 0.9, c1.low - 1.6, c1.low - 1.1)
      series[start + 4] = candle(c1.low - 1.0, c1.open - 0.2, c1.low - 1.2, c1.open - 0.4)
      break
    }
    case 'breakaway-bearish': {
      let p = trendUp(series, start, 2, rng)
      const c1 = candle(p, p + 2.0, p - 0.1, p + 1.9)
      series[start] = c1
      series[start + 1] = candle(c1.high + 0.6, c1.high + 1.4, c1.high + 0.5, c1.high + 1.3)
      series[start + 2] = candle(c1.high + 1.2, c1.high + 1.7, c1.high + 1.0, c1.high + 1.5)
      series[start + 3] = candle(c1.high + 1.4, c1.high + 1.6, c1.high + 0.9, c1.high + 1.1)
      series[start + 4] = candle(c1.high + 1.0, c1.high + 1.2, c1.open + 0.2, c1.open + 0.4)
      break
    }
    case 'break-low-rally': {
      let p = trendDown(series, start, 4, rng)
      const support = p
      for (let i = 0; i < 4; i++) {
        const open = support + randBetween(rng, 0.2, 0.8)
        const close = support + randBetween(rng, 0.1, 0.6)
        series[start + i] = candle(open, Math.max(open, close) + 0.3, support - 0.08, close)
      }
      series[start + 4] = candle(support + 0.3, support + 0.9, support - 1.5, support + 0.55)
      break
    }
    case 'break-high-fall': {
      let p = trendUp(series, start, 4, rng)
      const resist = p
      for (let i = 0; i < 4; i++) {
        const open = resist - randBetween(rng, 0.2, 0.8)
        const close = resist - randBetween(rng, 0.1, 0.6)
        series[start + i] = candle(open, resist + 0.08, Math.min(open, close) - 0.3, close)
      }
      series[start + 4] = candle(resist - 0.3, resist + 1.5, resist - 0.9, resist - 0.55)
      break
    }
    default:
      break
  }

  let last = series[end].close
  for (let i = end + 1; i < Math.min(n, end + 3); i++) {
    const open = last
    const close = open + randBetween(rng, -0.6, 0.6)
    series[i] = candle(open, Math.max(open, close) + 0.3, Math.min(open, close) - 0.3, close)
    last = close
  }

  return { series, start, end }
}

export function toChartCandles(series: Candle[], startDate = '2024-01-01'): ChartCandle[] {
  const base = new Date(startDate)
  return series.map((c, i) => {
    const d = new Date(base)
    d.setDate(base.getDate() + i)
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return {
      time: `${yyyy}-${mm}-${dd}`,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }
  })
}

export function buildPatternDemo(patternId: string, seed: number, length?: number): EmbedResult {
  const bars = getPatternById(patternId)?.bars ?? 1
  const len = length ?? Math.max(40, bars + 24)
  const base = generateBaseSeries(seed, len, 100)
  const at = randInt(createRng(seed + 9), 10, Math.max(10, len - bars - 4))
  return embedPattern(base, patternId, at, seed)
}

export function createIdentifySeries(
  patternId: string,
  seed: number,
  length?: number,
): EmbedResult {
  const bars = getPatternById(patternId)?.bars ?? 1
  const len = length ?? Math.max(36, bars + 20)
  const base = generateBaseSeries(seed, len, randBetween(createRng(seed), 80, 140))
  const at = randInt(createRng(seed + 3), 8, Math.max(8, len - bars - 4))
  return embedPattern(base, patternId, at, seed)
}
