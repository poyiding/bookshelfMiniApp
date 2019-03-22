import { request } from '../../util/index.js';

const db = wx.cloud.database();
const app = getApp();
Page({
	data: {
    bookDetail: {},
    hasInShelf: false,
    _id: '', // 数据索引id
	},
	onLoad: function(options) {
		wx.setNavigationBarTitle({
			title: '书籍详情'
		});
    request('bookinfo', {
      bookId: options.id,
    }).then(res => {
      this.setData({
        bookDetail: res
      });
    });
    this.queryHasInShelf(options.id);
	},
  // 查询书柜中是否添加过该书
  queryHasInShelf: function (bookId) {
    db.collection('bookCollection').where({
      bookId,
      _openid: 'o2aK45d_ryZH8lsH3I-QHGjNU824',
    }).get({
      success: res => {
        if (res.data && res.data.length > 0) {
          this.setData({
            hasInShelf: true,
            _id: res.data[0]._id
          });
        } else {
          this.setData({
            hasInShelf: false,
            _id: ''
          });
        }
      }
    });
  },
  addBook: function() {
    // console.log(app.globalData.openid);
    // o2aK45d_ryZH8lsH3I-QHGjNU824
    const { id, title, image, rating, author } = this.data.bookDetail;
    const info = {
      author,
      bookId: id,
      bookName: title,
      bookImg: image,
      average: rating.average,
    };
    const that = this;

    db.collection('bookCollection').add({
      data: info,
      success: res => {
        wx.showToast({
          title: '添加成功',
          duration: 1000
        });
        that.queryHasInShelf(id);
      }
    });

  },
  removeBook: function () {
    const id = this.data._id;
    const that = this;
    db.collection('bookCollection').doc(id).remove({
      success: () => {
        wx.showToast({
          title: '移出成功',
          duration: 1000
        });
        that.queryHasInShelf(id);
        // this.setData({
        //   hasInShelf: false
        // });
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
