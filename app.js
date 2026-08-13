App({
  onLaunch() {
    const progress = require('./utils/progress')
    progress.ensure()
  },
})
