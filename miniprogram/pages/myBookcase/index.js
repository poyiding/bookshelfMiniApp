const app = getApp();
const db = wx.cloud.database();

Page({
  data: {
    bookList: []
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的书柜'
    });
    db.collection('bookCollection').where({
      _openid: 'o2aK45d_ryZH8lsH3I-QHGjNU824',
    })
    // .skip(5) // 跳过结果集中的前 10 条，从第 11 条开始返回
    // .limit(5)
    .get({
      success: res => {
        if (res.data && res.data.length > 0) {
          this.setData({
            bookList: res.data
          });
        }
      }
    });
  },
  onReachBottom: function() {
    // todo paganation
  },
})
