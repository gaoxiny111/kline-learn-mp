const { patterns, getPatternsByCategory, categoryLabel, biasLabel, nisonLessons } = require('../../utils/core')

const tabs = [
  { id: 'all', title: categoryLabel.all },
  { id: 'reversal', title: categoryLabel.reversal },
  { id: 'continuation', title: categoryLabel.continuation },
  { id: 'neutral', title: categoryLabel.neutral },
  { id: 'principles', title: '原则' },
]

function decorate(list) {
  return list.map((p) => ({
    ...p,
    biasText: biasLabel[p.bias],
    categoryText: categoryLabel[p.category],
  }))
}

Page({
  data: {
    tabs,
    tab: 'all',
    keyword: '',
    list: decorate(patterns),
    lessons: nisonLessons,
  },
  refresh() {
    const q = this.data.keyword.trim()
    if (this.data.tab === 'principles') {
      const lessons = nisonLessons.filter(
        (l) => !q || l.title.includes(q) || l.chapter.includes(q) || l.summary.includes(q),
      )
      this.setData({ list: [], lessons })
      return
    }
    const base = getPatternsByCategory(this.data.tab)
    const list = decorate(
      q
        ? base.filter(
            (p) => p.name.includes(q) || p.aliases.some((a) => a.includes(q)) || p.id.includes(q.toLowerCase()),
          )
        : base,
    )
    this.setData({ list, lessons: [] })
  },
  onTab(e) {
    this.setData({ tab: e.currentTarget.dataset.id }, () => this.refresh())
  },
  onSearch(e) {
    this.setData({ keyword: e.detail.value }, () => this.refresh())
  },
  openDetail(e) {
    wx.navigateTo({ url: `/pages/pattern-detail/index?id=${e.currentTarget.dataset.id}` })
  },
})
