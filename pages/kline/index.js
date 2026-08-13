const market = require('../../utils/market')
const watchlist = require('../../utils/watchlist')
const progress = require('../../utils/progress')
const { scanPatternSignals, sideLabel } = require('../../utils/core')

Page({
  data: {
    symbol: '',
    name: '',
    candles: [],
    signals: [],
    watched: false,
    colorScheme: 'cn',
  },
  onLoad(query) {
    const symbol = String(query.symbol || '')
    const name = decodeURIComponent(query.name || symbol)
    this.setData({
      symbol,
      name,
      watched: watchlist.has(symbol),
      colorScheme: progress.snapshot().colorScheme,
    })
    wx.setNavigationBarTitle({ title: name || 'K线' })
    this.load(symbol)
  },
  load(symbol) {
    wx.showLoading({ title: '加载中' })
    market
      .loadKline(symbol, 80)
      .then((data) => {
        const candles = (data.candles || data.list || [])
          .map((c) => ({
            time: String(c.time || c.t || c.day || ''),
            open: Number(c.open ?? c.o),
            high: Number(c.high ?? c.h),
            low: Number(c.low ?? c.l),
            close: Number(c.close ?? c.c),
            volume: Number(c.volume ?? c.v || 0),
          }))
          .filter((c) => Number.isFinite(c.open) && Number.isFinite(c.close))
        const signals = scanPatternSignals(candles, 30).slice(0, 8).map((s, i) => ({
          ...s,
          key: `${s.patternId}-${s.time}-${i}`,
          sideText: sideLabel(s.side),
        }))
        this.setData({ candles, signals })
      })
      .catch((e) => wx.showToast({ title: e.message || 'K线失败', icon: 'none' }))
      .finally(() => wx.hideLoading())
  },
  toggleWatch() {
    watchlist.toggle(this.data.symbol, this.data.name)
    this.setData({ watched: watchlist.has(this.data.symbol) })
  },
})
