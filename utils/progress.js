const { get, set } = require('./storage')
const { quizLevels } = require('./core')

const KEY = 'kline-learn-progress-v1'

function defaultLevels() {
  const levels = {}
  for (const lv of quizLevels) {
    levels[lv.id] = { bestScore: 0, stars: 0, passed: false, attempts: 0 }
  }
  return levels
}

function todayKey(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function empty() {
  return {
    viewedPatternIds: [],
    practiceCorrect: 0,
    practiceTotal: 0,
    levels: defaultLevels(),
    colorScheme: 'cn',
    wrongBook: {},
    activityDates: [],
  }
}

function load() {
  const parsed = get(KEY, null)
  if (!parsed || typeof parsed !== 'object') return empty()
  return {
    ...empty(),
    ...parsed,
    levels: { ...defaultLevels(), ...(parsed.levels || {}) },
    colorScheme: parsed.colorScheme === 'us' ? 'us' : 'cn',
  }
}

function save(state) {
  set(KEY, state)
}

function ensure() {
  save(load())
}

function snapshot() {
  const { patterns } = require('./core')
  const s = load()
  const setDates = new Set(s.activityDates || [])
  let streak = 0
  if (setDates.size) {
    const cursor = new Date()
    if (!setDates.has(todayKey(cursor))) {
      cursor.setDate(cursor.getDate() - 1)
      if (!setDates.has(todayKey(cursor))) streak = 0
    }
    if (setDates.has(todayKey(cursor))) {
      while (setDates.has(todayKey(cursor))) {
        streak += 1
        cursor.setDate(cursor.getDate() - 1)
      }
    }
  }
  const unseen = patterns.find((p) => !s.viewedPatternIds.includes(p.id))
  const recommended = unseen || patterns[new Date().getDate() % patterns.length]
  const accuracy = s.practiceTotal ? Math.round((s.practiceCorrect / s.practiceTotal) * 100) : 0
  const passedLevels = quizLevels.filter((lv) => s.levels[lv.id]?.passed).length
  const wrongList = Object.values(s.wrongBook || {})
    .sort((a, b) => b.wrongCount - a.wrongCount)
    .slice(0, 3)
  return {
    ...s,
    streak,
    viewedCount: s.viewedPatternIds.length,
    totalPatterns: patterns.length,
    practiceAccuracy: accuracy,
    passedLevels,
    quizTotal: quizLevels.length,
    recommended,
    weakPatterns: wrongList,
    studyDays: (s.activityDates || []).length,
  }
}

function touch(state) {
  const key = todayKey()
  if (!state.activityDates.includes(key)) {
    state.activityDates = [...state.activityDates, key].slice(-180)
  }
}

function markViewed(id) {
  const s = load()
  if (!s.viewedPatternIds.includes(id)) s.viewedPatternIds.push(id)
  touch(s)
  save(s)
}

function recordPractice(correct, patternId) {
  const s = load()
  s.practiceTotal += 1
  if (correct) s.practiceCorrect += 1
  touch(s)
  if (patternId) {
    if (!correct) {
      const prev = s.wrongBook[patternId]
      s.wrongBook[patternId] = {
        patternId,
        wrongCount: (prev?.wrongCount || 0) + 1,
        lastWrongAt: Date.now(),
        lastSource: 'practice',
      }
    } else if (s.wrongBook[patternId]) {
      delete s.wrongBook[patternId]
    }
  }
  save(s)
}

function recordQuiz(levelId, score) {
  const s = load()
  const prev = s.levels[levelId] || { bestScore: 0, stars: 0, passed: false, attempts: 0 }
  const stars = score >= 90 ? 3 : score >= 75 ? 2 : score >= 60 ? 1 : 0
  s.levels[levelId] = {
    bestScore: Math.max(prev.bestScore, score),
    stars: Math.max(prev.stars, stars),
    passed: prev.passed || score >= 60,
    attempts: prev.attempts + 1,
  }
  touch(s)
  save(s)
}

function setColorScheme(scheme) {
  const s = load()
  s.colorScheme = scheme === 'us' ? 'us' : 'cn'
  save(s)
}

function resetAll() {
  save(empty())
}

module.exports = {
  load,
  save,
  ensure,
  snapshot,
  markViewed,
  recordPractice,
  recordQuiz,
  setColorScheme,
  resetAll,
}
