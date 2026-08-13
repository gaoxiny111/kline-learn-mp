/** 依据史蒂夫·尼森《日本蜡烛图技术》的教学原则（非逐字摘录） */

export interface NisonLesson {
  id: string
  chapter: string
  title: string
  summary: string
  points: string[]
}

/** 尼森强调须等次日确认的形态（单根或较弱组合） */
export const NISON_NEEDS_CONFIRM = new Set([
  'hammer',
  'hanging-man',
  'inverted-hammer',
  'shooting-star',
  'doji',
  'long-legged-doji',
  'gravestone-doji',
  'dragonfly-doji',
  'bullish-belt-hold',
  'bearish-belt-hold',
  'bullish-harami',
  'bearish-harami',
  'bullish-harami-cross',
  'bearish-harami-cross',
  'tweezers-top',
  'tweezers-bottom',
  'bullish-counterattack',
  'bearish-counterattack',
])

export const nisonTips: Record<string, string> = {
  hammer:
    '三条标准：实体靠区间上端、下影至少约实体两倍、几乎无上影。下影越长、实体越小越有意义。白锤子略偏强。次日收阳且高于锤子收盘更稳。',
  'hanging-man':
    '外形同锤子，必须出现在上涨之后。次日开盘相对上吊实体向下缺口越大越有效；或次日收阴且收盘低于上吊收盘。不可单根做空。',
  doji:
    '开收几乎相等即可。顶部效力远大于底部。长阳之后的十字尤其重要。若图上十字已经很多，新十字就失去警告意义。',
  'shooting-star':
    '上涨后的小实体加长上影。星线实体与前实体最好不重叠。次日走弱更有效。',
  'inverted-hammer':
    '下跌后的倒锤子本身不够，必须次日高开或收阳确认。',
  'bullish-engulfing':
    '后一根阳线实体抱住前一根阴线实体，影线不必吞没。须有明确下跌背景。',
  'bearish-engulfing':
    '后一根阴线实体抱住前一根阳线实体。上涨背景越清楚越有意义。',
  'piercing-line':
    '又称斩回线。第二根低开，收盘深入前阴实体一半以上。收得越深越接近吞没。',
  'dark-cloud-cover':
    '又称乌云线。第二根高开，收盘深入前阳实体一半以上。收得越深，乌云越浓。',
  'morning-star':
    '长阴 + 小实体星线（与前实体不重叠）+ 阳线明显推进到第一根实体内。股票里星线后一侧跳空常缺，仍可成立。',
  'evening-star':
    '长阳 + 星线 + 阴线向下扎入第一根实体。必须出现在上升趋势之后。',
  'bullish-harami':
    '长实体包住后一小实体。颜色不必相反。通常弱于锤子/吞没，常转为平静。十字孕线（呆滞形态）才是主要反转。',
  'bearish-harami':
    '长实体包住后一小实体。信号通常弱于吞没。',
  'rising-window':
    '窗口看两根蜡烛端点之间的缺口。跳空后的回撤往往会重新返回窗口；关闭后抛压仍在则持续含义减弱。',
  'falling-window':
    '向下窗口未关闭前多视为阻挡。回抽窗口是常见现象，不是形态失败。',
  'break-low-rally':
    '最低价刺破近期低点后，收盘重新站回该水平之上。',
  'break-high-fall':
    '最高价刺破近期高点后，收盘重新跌回该水平之下。',
  'three-white-soldiers':
    '三根收盘逐步抬高的阳线，收盘靠近当日高点。出现在低位或横盘后，预示进一步转强。',
}

export function nisonTipOf(id: string) {
  return (
    nisonTips[id] ??
    '先有趋势，再谈形态。单根信号常须次日确认；多种蜡烛信号或与均线、回撤、放量汇聚时更可靠。'
  )
}

export const nisonLessons: NisonLesson[] = [
  {
    id: 'ch9-summary',
    chapter: '第九章 蜡烛图技术汇总',
    title: '先趋势，后形态',
    summary: '反转形态必须出现在已有趋势里；没有下跌就谈不上底部反转。实体比影线更能说明多空胜负。',
    points: [
      '锤子与上吊外形相同，位置决定意义；上吊必须等次日确认',
      '十字线顶部效力远大于底部；长阳之后的十字尤其重要',
      '窗口属于持续，跳空后的回撤常会重新返回窗口',
      '孕线通常弱于吞没，常转为平静；十字孕线（呆滞）才是主要反转',
      '下影不到理想的 2 倍也可以参考，但要有其它信号验证',
    ],
  },
  {
    id: 'ch10-confluence',
    chapter: '第十章 蜡烛图信号的汇聚',
    title: '同一区域多种信号',
    summary: '同一价位附近同时出现若干蜡烛信号时，可靠性明显高于孤立的一根线。',
    points: [
      '例如高位黄昏星又碰上平头顶部、北方十字',
      '低位锤子若同时贴近窗口上沿或前低，意义更强',
      '系统会把放量、站上/跌破均线标成汇聚提示',
    ],
  },
  {
    id: 'ch11-trendline',
    chapter: '第十一章 蜡烛图与趋势线',
    title: '破低反涨、破高反跌、极性转换',
    summary: '趋势线或水平支撑被刺破后迅速收回，常是假突破。旧支撑被有效跌破后，往往变成日后压力。',
    points: [
      '破低反涨：最低价跌破近期低点，收盘回到该低点之上',
      '破高反跌：最高价升破近期高点，收盘回到该高点之下',
      '极性转换：被跌破的支撑，再反弹时可能变成阻力',
    ],
  },
  {
    id: 'ch12-retrace',
    chapter: '第十二章 蜡烛图与百分比回撤',
    title: '回撤位上的蜡烛反转',
    summary: '常见回撤约在 1/3、1/2、2/3（或 38%、50%、62%）一带。若此处同时出现锤子、启明星、孕线，比半空中的同样形态更值得看。',
    points: ['先标出上升或下跌波段的起点终点', '在回撤区等待蜡烛信号，而不是提前猜拐点'],
  },
  {
    id: 'ch13-ma',
    chapter: '第十三章 蜡烛图与移动平均线',
    title: '均线支撑压力 + 蜡烛',
    summary: '价格回落到均线附近出现看涨蜡烛，或反弹到均线附近出现看跌蜡烛，属于东西方相互验证。',
    points: ['买点信号若收在均线之上，汇聚加分', '卖点信号若收在均线之下，汇聚加分'],
  },
  {
    id: 'ch14-osc',
    chapter: '第十四章 蜡烛图与摆动指数',
    title: '超买超卖与背离',
    summary: 'RSI、随机指数、MACD 出现背离时，再用黄昏星、乌云盖顶等蜡烛去对准时机，而不是单靠指标买卖。',
    points: ['指标给背景，蜡烛给时机', '高位背离 + 流星/黄昏星，低位背离 + 锤子/启明星'],
  },
  {
    id: 'ch15-volume',
    chapter: '第十五章 蜡烛图与交易量',
    title: '放量确认',
    summary: '反转或窗口当日明显放量，说明有新的力量参与。缩量的锤子、缩量的突破，都要降权。',
    points: ['系统在有成交量数据时会标注「放量」', '无量数据时不臆造汇聚'],
  },
  {
    id: 'ch16-target',
    chapter: '第十六章 测算价格目标',
    title: '箱体、对等运动与旗形',
    summary: '突破箱体后，常用箱体高度投射目标；旗形、尖旗形则配合先前推进波做对等测量。蜡烛负责确认突破是否站稳。',
    points: ['先有整理区间，再谈突破目标', '窗口被回补常意味着原方向受阻，不宜再按原目标硬推'],
  },
  {
    id: 'ch17-combine',
    chapter: '第十七章 东西方技术珠联璧合',
    title: '相互验证',
    summary: '蜡烛图并不排斥趋势线、均线、回撤和指标。单独一根漂亮 K 线不够；背景一致时才更有学习价值。',
    points: ['本系统标注的是学习信号，不是交易指令', '已确认 + 汇聚的形态，优先于孤立的待确认单根'],
  },
]
