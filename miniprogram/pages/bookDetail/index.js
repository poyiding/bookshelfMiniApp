import { request } from '../../util/index.js';

Page({
	data: {
    bookDetail: {}
	},
	onLoad: function(options) {
		wx.setNavigationBarTitle({
			title: '书籍详情'
		})
    request('bookinfo', {
      bookId: options.id,
    }).then(res => {
      this.setData({
        bookDetail: res
      })
    })
	},
  addShelf: function() {
    console.log('加入书架');
  },
  handleShare: function() {
    console.log('分享');
  }
})
