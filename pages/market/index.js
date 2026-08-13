const market = require('../../utils/market')
const { tone, fmtPrice, fmtPct } = require('../../utils/format')

function decorate(list, quotes) {
  const map = {}
  for (const q of quotes) map[q.id || q.code] = q
  return list.map((s) => {
    const q = map[s.id] || {}
    return {
      ...s,
      priceText: fmtPrice(q.price),
      pctText: fmtPct(q.changePct),
      tone: tone(q.changePct),
    }
  })
}

Page({
  data: {
    statusLabel: '',
    overview: null,
    indexes: market.INDEXES,
    hots: market.HOT,
  },
  onShow() {
    this.reload()
  },
  reload() {
    const ids = [...market.INDEXES, ...market.HOT].map((x) => x.id)
    Promise.all([market.loadOverview().catch(() => null), market.loadQuotes(ids)])
      .then(([overview, quotes]) => {
        this.setData({
          overview,
          statusLabel: (overview && overview.statusLabel) || '',
          indexes: decorate(market.INDEXES, quotes),
          hots: decorate(market.HOT, quotes),
        })
      })
      .catch((e) => wx.showToast({ title: e.message || '行情失败', icon: 'none' }))
  },
  openKline(e) {
    const { id, name } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/kline/index?symbol=${id}&name=${encodeURIComponent(name)}` })
  },
})
