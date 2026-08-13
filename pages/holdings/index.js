const holdings = require('../../utils/holdings')
const market = require('../../utils/market')
const { tone, fmtPrice, fmtPct } = require('../../utils/format')

Page({
  data: { items: [] },
  onShow() {
    this.reload()
  },
  reload() {
    const items = holdings.list()
    this.setData({
      items: items.map((x) => ({
        ...x,
        priceText: '--',
        pctText: '--',
        tone: 'flat',
      })),
    })
    const ids = items.map((x) => x.symbolId)
    if (!ids.length) return
    market
      .loadQuotes(ids)
      .then((list) => {
        const map = {}
        for (const q of list) map[q.id || q.code] = q
        this.setData({
          items: items.map((x) => {
            const q = map[x.symbolId] || {}
            return {
              ...x,
              priceText: fmtPrice(q.price),
              pctText: fmtPct(q.changePct),
              tone: tone(q.changePct),
            }
          }),
        })
      })
      .catch((e) => wx.showToast({ title: e.message || '行情失败', icon: 'none' }))
  },
  goAdd() {
    wx.navigateTo({ url: '/pages/holdings-add/index' })
  },
  openKline(e) {
    const { id, name } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/kline/index?symbol=${id}&name=${encodeURIComponent(name)}` })
  },
  remove(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '删除持仓',
      success: (res) => {
        if (res.confirm) {
          holdings.remove(id)
          this.reload()
        }
      },
    })
  },
})
