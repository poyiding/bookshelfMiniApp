
/**
 * author: dingkang
 * description: 私人书架 miniApp
 */

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true, // 将用户访问记录到用户管理中
      })
    }

    this.globalData = {}
  },
})
