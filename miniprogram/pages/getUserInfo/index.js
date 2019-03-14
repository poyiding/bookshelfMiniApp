const app = getApp()
const db = wx.cloud.database();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindGetUserInfo() {
    const that =this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              // 授权后将用户信息保存globalData
              app.globalData = {
                userInfo: res.userInfo,
              };
              wx.switchTab({
                url: '/pages/home/index'
              });
              that.onGetOpenid(res.userInfo);
            }
          });
        }
      }
    });
  },
  // 获取用户openId
  onGetOpenid: function (userInfo) {
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        app.globalData.openid = res.result.openid
        // db.collection('userList').add({
        //   data: userInfo,
        //   success: () => {
        //     console.log('登录成功');
        //   }
        // });
      },
      fail: err => {
        wx.showToast({
          title: err,
          icon: 'none',
          duration: 2000
        });
        // console.error('[login] 调用失败', err);
      }
    })
  },
})