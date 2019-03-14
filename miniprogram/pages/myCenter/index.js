const app = getApp();
Page({
	data: {
    avatarUrl: '',
    nickName: '',
	},
	onLoad: function(options) {
    const { avatarUrl, nickName } = app.globalData.userInfo;
    this.setData({
      avatarUrl,
      nickName,
    })
	}
})
