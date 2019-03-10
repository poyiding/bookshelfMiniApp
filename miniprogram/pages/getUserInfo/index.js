const app = getApp()
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindGetUserInfo() {
    const that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              // 授权后将用户信息保存globalData
              app.globalData = {
                authorized: true,
                ...res.userInfo
              };
              wx.switchTab({
                url: '/pages/home/index'
              });
            }
          });
        }
      }
    });
  },
})