const { createChoiceQuestion, toChartCandles, patterns } = require('../../utils/core')
const progress = require('../../utils/progress')

Page({
  data: {
    questions: [],
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
    const seed = Date.now()
    const pool = query.pattern ? [query.pattern] : patterns.map((p) => p.id)
    const questions = []
    for (let i = 0; i < 8; i++) {
      const pid = pool[i % pool.length]
      questions.push(createChoiceQuestion(pid, seed + i * 31))
    }
    this._questions = questions
    this.setData({
      total: questions.length,
      colorScheme: progress.snapshot().colorScheme,
      correctCount: 0,
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
    progress.recordPractice(ok, this.data.question.patternId)
    this.setData({
      picked: id,
      answered: true,
      correctCount: this.data.correctCount + (ok ? 1 : 0),
    })
  },
  next() {
    if (this.data.index + 1 >= this.data.total) {
      wx.showModal({
        title: '练习结束',
        content: `答对 ${this.data.correctCount}/${this.data.total}`,
        showCancel: false,
        success: () => wx.navigateBack(),
      })
      return
    }
    this.show(this.data.index + 1)
  },
})
