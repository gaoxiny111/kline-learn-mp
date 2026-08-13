const watchlist = require('../../utils/watchlist')
const market = require('../../utils/market')
const { tone, fmtPrice, fmtPct } = require('../../utils/format')

Page({
  data: { items: [] },
  onShow() {
    this.reload()
  },
  reload() {
    const items = watchlist.list()
    this.setData({
      items: items.map((x) => ({ ...x, priceText: '--', pctText: '--', tone: 'flat' })),
    })
    if (!items.length) return
    market
      .loadQuotes(items.map((x) => x.id))
      .then((list) => {
        const map = {}
        for (const q of list) map[q.id || q.code] = q
        this.setData({
          items: items.map((x) => {
            const q = map[x.id] || {}
            return { ...x, priceText: fmtPrice(q.price), pctText: fmtPct(q.changePct), tone: tone(q.changePct) }
          }),
        })
      })
      .catch((e) => wx.showToast({ title: e.message || '行情失败', icon: 'none' }))
  },
  goAdd() {
    wx.navigateTo({ url: '/pages/holdings-add/index?watch=1' })
  },
  openKline(e) {
    const { id, name } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/kline/index?symbol=${id}&name=${encodeURIComponent(name)}` })
  },
  remove(e) {
    watchlist.remove(e.currentTarget.dataset.id)
    this.reload()
  },
})
