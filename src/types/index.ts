export type PatternCategory = 'reversal' | 'continuation' | 'neutral'
export type PatternBias = 'bullish' | 'bearish' | 'neutral'
export type ColorScheme = 'cn' | 'us'

export interface Candle {
  open: number
  high: number
  low: number
  close: number
}

export interface ChartCandle {
  time: string
  open: number
  high: number
  low: number
  close: number
  /** 成交量（手）；本地演示数据可能无 */
  volume?: number
}

export interface PatternDef {
  id: string
  name: string
  aliases: string[]
  category: PatternCategory
  bias: PatternBias
  bars: number
  difficulty: 1 | 2 | 3
  rules: string[]
  psychology: string
  commonMistakes: string[]
  demoSeed: number
}

export interface AnswerRange {
  start: number
  end: number
}

export interface IdentifyQuestion {
  type: 'identify'
  id: string
  patternId: string
  ohlc: Candle[]
  answer: AnswerRange
  explanation: string
}

export interface ChoiceQuestion {
  type: 'choice'
  id: string
  patternId: string
  ohlc: Candle[]
  answer: AnswerRange
  options: { id: string; label: string }[]
  correctOptionId: string
  explanation: string
}

export type Question = IdentifyQuestion | ChoiceQuestion

export interface QuizLevel {
  id: string
  name: string
  description: string
  questionCount: number
  patternIds: string[]
  unlockScore: number
}

export interface LevelProgress {
  bestScore: number
  stars: number
  passed: boolean
  attempts: number
}

export type AnswerSource = 'practice' | 'quiz'

export interface WrongEntry {
  patternId: string
  wrongCount: number
  lastWrongAt: number
  lastSource: AnswerSource
}

export interface PaperTrade {
  id: string
  symbolId: string
  symbolName: string
  side: 'long'
  entryIndex: number
  entryTime: string
  entryPrice: number
  exitIndex?: number
  exitTime?: string
  exitPrice?: number
  qty: number
  patternId: string | null
  /** 止损价（触及则自动平仓） */
  stopLoss?: number | null
  /** 止盈价 */
  takeProfit?: number | null
  pnl?: number
  pnlPct?: number
  closed: boolean
  createdAt: number
}

export interface PatternTradeStat {
  patternId: string
  trades: number
  wins: number
  losses: number
  winRate: number
  totalPnl: number
  avgPnlPct: number
}
