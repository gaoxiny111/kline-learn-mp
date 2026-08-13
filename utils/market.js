const API =
  'https://kline-learn-d0ghml5k29b2f6cd8-1258512082.ap-shanghai.app.tcloudbase.com/api/kline'

const INDEXES = [
  { id: 'sh000001', name: '上证指数' },
  { id: '399001', name: '深证成指' },
  { id: '399006', name: '创业板指' },
]

const HOT = [
  { id: '600519', name: '贵州茅台' },
  { id: '300750', name: '宁德时代' },
  { id: '601318', name: '中国平安' },
  { id: '000001', name: '平安银行' },
  { id: '600036', name: '招商银行' },
  { id: '000858', name: '五粮液' },
  { id: '002594', name: '比亚迪' },
  { id: '300059', name: '东方财富' },
]

function request(query) {
  const qs = Object.keys(query)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
    .join('&')
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API}?${qs}`,
      method: 'GET',
      success(res) {
        const data = res.data || {}
        if (res.statusCode >= 200 && res.statusCode < 300 && !data.error) {
          resolve(data)
          return
        }
        reject(new Error(data.message || data.error || `HTTP ${res.statusCode}`))
      },
      fail(err) {
        reject(new Error(err.errMsg || '网络失败'))
      },
    })
  })
}

function loadQuotes(ids) {
  if (!ids.length) return Promise.resolve([])
  return request({ action: 'quotes', symbols: ids.join(',') }).then((data) => data.list || [])
}

function loadKline(symbol, lmt = 80) {
  return request({ symbol, lmt: String(lmt), klt: '101' })
}

function searchStocks(q, limit = 12) {
  const keyword = String(q || '').trim()
  if (!keyword) return Promise.resolve([])
  return request({ action: 'search', q: keyword, limit: String(limit) }).then((data) => data.list || [])
}

function loadOverview() {
  return request({ action: 'overview' })
}

module.exports = {
  API,
  INDEXES,
  HOT,
  request,
  loadQuotes,
  loadKline,
  searchStocks,
  loadOverview,
}
