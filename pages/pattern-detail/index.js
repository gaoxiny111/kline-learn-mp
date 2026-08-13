const { getPatternById, buildPatternDemo, toChartCandles, biasLabel, categoryLabel, nisonChapterOf, nisonChapterLabel, nisonTipOf } = require('../../utils/core')
const progress = require('../../utils/progress')

Page({
  data: {
    pattern: null,
    candles: [],
    highlight: null,
    colorScheme: 'cn',
    biasText: '',
    categoryText: '',
    chapter: '',
    tip: '',
  },
  onLoad(query) {
    const pattern = getPatternById(String(query.id || ''))
    if (!pattern) {
      wx.showToast({ title: '未找到形态', icon: 'none' })
      return
    }
    progress.markViewed(pattern.id)
    const demo = buildPatternDemo(pattern.id, pattern.demoSeed)
    const snap = progress.snapshot()
    this.setData({
      pattern,
      candles: toChartCandles(demo.series),
      highlight: { start: demo.start, end: demo.end },
      colorScheme: snap.colorScheme,
      biasText: biasLabel[pattern.bias],
      categoryText: categoryLabel[pattern.category],
      chapter: nisonChapterLabel[nisonChapterOf(pattern.id)] || '',
      tip: nisonTipOf(pattern.id),
    })
  },
  goPractice() {
    const id = this.data.pattern.id
    wx.navigateTo({ url: `/pages/practice-session/index?pattern=${id}` })
  },
})
