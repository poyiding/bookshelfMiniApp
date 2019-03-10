const req = require('request-promise');

exports.main = (event) => {
  const result = req(`https://api.douban.com/v2/book/search?q=${event.queryParam}`).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  })
  return result
}