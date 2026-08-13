const progress = require('../../utils/progress')
const auth = require('../../utils/auth')

Page({
  data: {
    loggedIn: false,
    nickName: '',
    streak: 0,
    studyDays: 0,
    accuracy: 0,
    viewedCount: 0,
    totalPatterns: 0,
    usColor: false,
  },
  onShow() {
    this.refresh()
  },
  refresh() {
    const p = auth.profile()
    const s = progress.snapshot()
    this.setData({
      loggedIn: !!p.loggedIn,
      nickName: p.nickName || '微信用户',
      streak: s.streak,
      studyDays: s.studyDays,
      accuracy: s.practiceAccuracy,
      viewedCount: s.viewedCount,
      totalPatterns: s.totalPatterns,
      usColor: s.colorScheme === 'us',
    })
  },
  onLogin() {
    if (this.data.loggedIn) return
    auth
      .login()
      .then(() => {
        wx.showToast({ title: '已登录' })
        this.refresh()
      })
      .catch((e) => wx.showToast({ title: e.message || '登录失败', icon: 'none' }))
  },
  logout() {
    auth.logout()
    this.refresh()
  },
  onColor(e) {
    progress.setColorScheme(e.detail.value ? 'us' : 'cn')
    this.refresh()
  },
  goAtlas() {
    wx.navigateTo({ url: '/pages/atlas/index' })
  },
  reset() {
    wx.showModal({
      title: '重置进度',
      content: '将清空图鉴学习与练习统计',
      success: (res) => {
        if (res.confirm) {
          progress.resetAll()
          this.refresh()
        }
      },
    })
  },
})
