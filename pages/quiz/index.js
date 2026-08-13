const { quizLevels } = require('../../utils/core')
const progress = require('../../utils/progress')

Page({
  data: { levels: [] },
  onShow() {
    const s = progress.snapshot()
    this.setData({
      levels: quizLevels.map((lv, i) => {
        const prev = quizLevels[i - 1]
        const locked = lv.unlockScore > 0 && prev && !s.levels[prev.id]?.passed
        const st = s.levels[lv.id] || {}
        return { ...lv, locked, passed: !!st.passed, bestScore: st.bestScore || 0 }
      }),
    })
  },
  start(e) {
    const { id, locked } = e.currentTarget.dataset
    if (locked) {
      wx.showToast({ title: '请先通过上一关', icon: 'none' })
      return
    }
    wx.navigateTo({ url: `/pages/quiz-session/index?level=${id}` })
  },
})
