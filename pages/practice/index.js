const { patterns } = require('../../utils/core')
const progress = require('../../utils/progress')

Page({
  data: { patterns: [], accuracy: 0 },
  onShow() {
    this.setData({
      accuracy: progress.snapshot().practiceAccuracy,
      patterns: patterns.map((p) => ({
        id: p.id,
        name: p.name,
        bars: p.bars,
        hint: (p.psychology || '').slice(0, 22),
      })),
    })
  },
  startAll() {
    wx.navigateTo({ url: '/pages/practice-session/index' })
  },
  startOne(e) {
    wx.navigateTo({ url: `/pages/practice-session/index?pattern=${e.currentTarget.dataset.id}` })
  },
})
