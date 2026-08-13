const progress = require('../../utils/progress')
const { biasLabel } = require('../../utils/core')

Page({
  data: {
    streak: 0,
    viewedCount: 0,
    totalPatterns: 0,
    passedLevels: 0,
    quizTotal: 0,
    practiceAccuracy: 0,
    recommended: { name: '', psychology: '', bias: 'neutral', biasText: '', id: '' },
  },
  onShow() {
    const s = progress.snapshot()
    const rec = s.recommended || {}
    this.setData({
      streak: s.streak,
      viewedCount: s.viewedCount,
      totalPatterns: s.totalPatterns,
      passedLevels: s.passedLevels,
      quizTotal: s.quizTotal,
      practiceAccuracy: s.practiceAccuracy,
      recommended: {
        id: rec.id,
        name: rec.name,
        psychology: rec.psychology,
        bias: rec.bias,
        biasText: biasLabel[rec.bias] || '',
      },
    })
  },
  openRecommend() {
    const id = this.data.recommended.id
    if (id) wx.navigateTo({ url: `/pages/pattern-detail/index?id=${id}` })
  },
  goAtlas() {
    wx.navigateTo({ url: '/pages/atlas/index' })
  },
  goPractice() {
    wx.navigateTo({ url: '/pages/practice/index' })
  },
  goQuiz() {
    wx.navigateTo({ url: '/pages/quiz/index' })
  },
})
