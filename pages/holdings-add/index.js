const market = require('../../utils/market')
const holdings = require('../../utils/holdings')

Page({
  data: { keyword: '', list: [], watch: false },
  onLoad(query) {
    this.setData({ watch: query.watch === '1' })
    if (this.data.watch) wx.setNavigationBarTitle({ title: '添加自选' })
  },
  onInput(e) {
    this.setData({ keyword: e.detail.value })
  },
  search() {
    const q = this.data.keyword.trim()
    if (!q) return
    wx.showLoading({ title: '搜索中' })
    market
      .searchStocks(q)
      .then((list) => this.setData({ list }))
      .catch((e) => wx.showToast({ title: e.message || '搜索失败', icon: 'none' }))
      .finally(() => wx.hideLoading())
  },
  add(e) {
    const { id, name } = e.currentTarget.dataset
    if (this.data.watch) {
      require('../../utils/watchlist').add(id, name)
    } else {
      holdings.add({ symbolId: id, name })
    }
    wx.showToast({ title: '已添加' })
    setTimeout(() => wx.navigateBack(), 400)
  },
})
