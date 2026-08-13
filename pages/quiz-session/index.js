const { quizLevels, createQuizSession, toChartCandles, createChoiceQuestion } = require('../../utils/core')
const progress = require('../../utils/progress')

Page({
  data: {
    levelName: '',
    index: 0,
    total: 0,
    question: null,
    candles: [],
    highlight: null,
    options: [],
    correctId: '',
    picked: '',
    answered: false,
    explain: '',
    colorScheme: 'cn',
    correctCount: 0,
  },
  onLoad(query) {
    const level = quizLevels.find((l) => l.id === query.level) || quizLevels[0]
    const qs = createQuizSession(level.patternIds, level.questionCount, Date.now()).map((q, i) =>
      q.type === 'choice' ? q : createChoiceQuestion(q.patternId, Date.now() + i * 17),
    )
    this._levelId = level.id
    this._questions = qs
    this.setData({
      levelName: level.name,
      total: qs.length,
      colorScheme: progress.snapshot().colorScheme,
    })
    this.show(0)
  },
  show(index) {
    const q = this._questions[index]
    this.setData({
      index,
      question: q,
      candles: toChartCandles(q.ohlc),
      highlight: q.answer,
      options: q.options,
      correctId: q.correctOptionId,
      picked: '',
      answered: false,
      explain: q.explanation,
    })
  },
  pick(e) {
    if (this.data.answered) return
    const id = e.currentTarget.dataset.id
    const ok = id === this.data.correctId
    this.setData({
      picked: id,
      answered: true,
      correctCount: this.data.correctCount + (ok ? 1 : 0),
    })
  },
  next() {
    if (this.data.index + 1 >= this.data.total) {
      const score = Math.round((this.data.correctCount / this.data.total) * 100)
      progress.recordQuiz(this._levelId, score)
      wx.showModal({
        title: score >= 60 ? '通关' : '未通关',
        content: `得分 ${score}`,
        showCancel: false,
        success: () => wx.navigateBack(),
      })
      return
    }
    this.show(this.data.index + 1)
  },
})
