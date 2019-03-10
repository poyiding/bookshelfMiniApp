// 封装云函数请求
export function request(cloudfuntion,option) {
  wx.showLoading({
    title: '加载中',
  });
  return wx.cloud.callFunction({
    name: cloudfuntion,
    data: option
  }).then(res => {
    wx.hideLoading();
    return JSON.parse(res.result);
  })
}