const { get, set } = require('./storage')

const KEY = 'kline-learn-mp-auth'

function profile() {
  return get(KEY, { loggedIn: false, nickName: '', avatarUrl: '' })
}

function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        if (!res.code) {
          reject(new Error('未拿到登录码'))
          return
        }
        const next = {
          loggedIn: true,
          nickName: profile().nickName || '微信用户',
          avatarUrl: profile().avatarUrl || '',
          codeAt: Date.now(),
        }
        set(KEY, next)
        resolve(next)
      },
      fail(err) {
        reject(new Error(err.errMsg || '登录失败'))
      },
    })
  })
}

function setProfile(patch) {
  const next = { ...profile(), ...patch, loggedIn: true }
  set(KEY, next)
  return next
}

function logout() {
  set(KEY, { loggedIn: false, nickName: '', avatarUrl: '' })
}

module.exports = { profile, login, setProfile, logout }
