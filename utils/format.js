function tone(n) {
  if (n == null || Number.isNaN(n) || n === 0) return 'flat'
  return n > 0 ? 'up' : 'down'
}

function fmtPrice(n) {
  if (n == null || Number.isNaN(n)) return '--'
  return Number(n).toFixed(2)
}

function fmtPct(n) {
  if (n == null || Number.isNaN(n)) return '--'
  const sign = n > 0 ? '+' : ''
  return `${sign}${Number(n).toFixed(2)}%`
}

function fmtMoney(n, digits = 2) {
  if (n == null || Number.isNaN(n)) return '--'
  return Number(n).toLocaleString('zh-CN', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
}

module.exports = { tone, fmtPrice, fmtPct, fmtMoney }
