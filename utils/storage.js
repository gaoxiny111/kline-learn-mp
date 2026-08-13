function get(key, fallback) {
  try {
    const v = wx.getStorageSync(key)
    if (v === '' || v == null) return fallback
    return v
  } catch {
    return fallback
  }
}

function set(key, value) {
  try {
    wx.setStorageSync(key, value)
  } catch {
    /* ignore quota */
  }
}

module.exports = { get, set }
