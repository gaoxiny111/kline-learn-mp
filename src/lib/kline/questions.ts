import { patterns, getPatternById } from '@/data/patterns'
import type { ChoiceQuestion, IdentifyQuestion, Question } from '@/types'
import { createIdentifySeries } from './generate'
import { createRng, randInt } from './rng'

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function createIdentifyQuestion(patternId: string, seed: number): IdentifyQuestion {
  const pattern = getPatternById(patternId)
  const { series, start, end } = createIdentifySeries(patternId, seed)
  return {
    type: 'identify',
    id: `id-${patternId}-${seed}`,
    patternId,
    ohlc: series,
    answer: { start, end },
    explanation: pattern
      ? `正确答案是「${pattern.name}」。${pattern.psychology}`
      : '请对照形态要点再看一遍。',
  }
}

export function createChoiceQuestion(patternId: string, seed: number): ChoiceQuestion {
  const pattern = getPatternById(patternId)!
  const rng = createRng(seed)
  const { series, start, end } = createIdentifySeries(patternId, seed)
  const others = shuffle(
    patterns.filter((p) => p.id !== patternId),
    rng,
  ).slice(0, 3)
  const options = shuffle(
    [{ id: pattern.id, label: pattern.name }, ...others.map((p) => ({ id: p.id, label: p.name }))],
    rng,
  )
  return {
    type: 'choice',
    id: `ch-${patternId}-${seed}`,
    patternId,
    ohlc: series,
    answer: { start, end },
    options,
    correctOptionId: pattern.id,
    explanation: `这是「${pattern.name}」。${pattern.rules[0]}`,
  }
}

export function createPracticeSession(
  patternIds: string[] | 'all',
  count = 8,
  seed = Date.now(),
): IdentifyQuestion[] {
  const pool = patternIds === 'all' ? patterns.map((p) => p.id) : patternIds
  const rng = createRng(seed)
  const questions: IdentifyQuestion[] = []
  for (let i = 0; i < count; i++) {
    const pid = pool[randInt(rng, 0, pool.length - 1)]
    questions.push(createIdentifyQuestion(pid, seed + i * 17 + 3))
  }
  return questions
}

export function createQuizSession(patternIds: string[], count: number, seed: number): Question[] {
  const rng = createRng(seed)
  const questions: Question[] = []
  for (let i = 0; i < count; i++) {
    const pid = patternIds[randInt(rng, 0, patternIds.length - 1)]
    if (i % 3 === 2) {
      questions.push(createChoiceQuestion(pid, seed + i * 31))
    } else {
      questions.push(createIdentifyQuestion(pid, seed + i * 31))
    }
  }
  return questions
}

export function rangesOverlap(a: { start: number; end: number }, b: { start: number; end: number }) {
  return !(a.end < b.start || b.end < a.start)
}

/** Accept if selected range covers the answer and is not wildly larger */
export function judgeIdentify(
  selected: { start: number; end: number } | null,
  answer: { start: number; end: number },
) {
  if (!selected) return false
  const selStart = Math.min(selected.start, selected.end)
  const selEnd = Math.max(selected.start, selected.end)
  const answerLen = answer.end - answer.start
  const selLen = selEnd - selStart
  const cover = selStart <= answer.start && selEnd >= answer.end
  const tight = selLen <= answerLen + 2
  const overlapOk =
    rangesOverlap({ start: selStart, end: selEnd }, answer) && selLen <= Math.max(4, answerLen + 1)
  return (cover && tight) || (selStart === answer.start && selEnd === answer.end) || overlapOk
}
