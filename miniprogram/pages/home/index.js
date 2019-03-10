const app = getApp();
Page({
	data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
		recommendBook: [
			{
				image: "https://img3.doubanio.com/view/subject/m/public/s1050021.jpg",
				id: '1064275',
				title:"老人与海",
			},
			{
				image: "https://img3.doubanio.com/view/subject/m/public/s1070222.jpg",
				id: '1008145',
				title:"围城",
			}
		],
	},
  // onLoad: function() {
  //   console.log(app.globalData);
  //   if (!app.globalData.authorized) {
  //     wx.redirectTo({
  //       url: '/pages/getUserInfo/index'
  //     });
  //   }
  // },

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
})
