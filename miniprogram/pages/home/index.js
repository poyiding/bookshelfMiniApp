const app = getApp();
const db = wx.cloud.database();

Page({
	data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    popularBooks:[],
    recommend: [],
	},
  onLoad: function() {
    // console.log(app.globalData);
    // if (!app.globalData.userInfo) {
    //   wx.redirectTo({
    //     url: '/pages/getUserInfo/index'
    //   });
    // }
    db.collection('bookDatas').doc('XJNdRlsqTi00tp34U_').get({
      success: res => {
        if (res.data) {
          const { popularBooks, recommend } = res.data;
          this.setData({
            popularBooks,
            recommend,
          });
        }
      }
    })

  },
  handleClick: function() {
    wx.redirectTo({
      url: '/pages/getUserInfo/index'
    });
  },
  onSearch: function(info) {
    const queryParam = info.detail;
    if (queryParam) {
      wx.navigateTo({
        url: `/pages/queryResult/index?query=${queryParam}`
      })
    }
  },
	queryBookDetail: function (e) {
		const { bookid } = e.currentTarget.dataset;
		wx.navigateTo({
			url: `/pages/bookDetail/index?id=${bookid}`
		})
	},
 // 扫图书二维码
  onScanCode: function () {
		wx.scanCode({
			onlyFromCamera: false,
			scanType: ['barCode'],
			success: res => {
        this.onSearch({
          detail: res.result
        });
			},
			fail: err => {
				console.error(err)
			}
		})
	},
  // 转发
  onShareAppMessage(res) {
    return {
      title: '私房书柜',
    }
  }
})
