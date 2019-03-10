import { request } from '../../util/index.js';

Page({
  data: {
    queryResult: []
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索结果'
    });
    request('queryBook', {
      queryParam: encodeURI(options.query),
    }).then(res => {
      if (res) {
        this.setData({
          queryResult: res.books
        });
      }
    });
  },
})