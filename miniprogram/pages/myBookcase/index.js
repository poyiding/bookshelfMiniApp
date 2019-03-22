const app = getApp();
const db = wx.cloud.database();

Page({
  data: {
    bookList: [],
    limit: 5, // 每页数据条数
    currentPage: 1, // 当前页
    total: 0, // 总条数
    pages: 0, // 总页数
  },
  onLoad: function () {
    // _openid 从app 中获取，暂时先写死
    wx.setNavigationBarTitle({
      title: '我的书柜'
    });
    db.collection('bookCollection').where({
      _openid: 'o2aK45d_ryZH8lsH3I-QHGjNU824',
    }).count({
      success: res => {
        const totalSize = res.total || 0;
        if (totalSize > 0) {
         this.setData({
           total: totalSize,
           pages: Math.ceil(totalSize / 5)
         })
        }
      }
    })
    this.queryList();
  },
  queryList: function() {
    wx.showLoading({
      title: '加载中',
    });
    const { limit, currentPage, pages, bookList } = this.data;
    const skipNum = (currentPage -1) * limit; // 例如查第2页数据：就要跳过(2 -1 ) * 5 条，从第6条开始查询
    db.collection('bookCollection').where({
      _openid: 'o2aK45d_ryZH8lsH3I-QHGjNU824',
    })
      .skip(currentPage - 1)
      .limit(limit)
      .get({
        success: res => {
          wx.hideLoading();
          if (res.data && res.data.length > 0) {
            const connectData = bookList.concat(res.data);
            this.setData({
              bookList: connectData
            });
          }
        }
      });
  },
  onReachBottom: function() {
    const { currentPage, pages } = this.data;
    if (currentPage !== pages) {
      const current = currentPage + 1;
      this.setData({
        currentPage: current
      })
      this.queryList();
    }

  },
  onShareAppMessage(res) {
    return {
      title: '私房书柜',
    }
  }
})
