# bookshelfMiniApp
私房书架：一个查询书籍详情和收藏的微信小程序，采用云开发开发微信小程序

### 云开发

云开发目前提供三大基础能力支持：

云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写自身业务逻辑代码

数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 数据库

存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理

具体看：[小程序云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

云开发优势：

* 快速接入：只需申请，即可接入小程序云开发
* 快速实现：云开发将功能深度封装，无需再次封装
* 无感运维：开发者无需关系运维，只需关心业务逻辑

关于云函数：

云函数其实是 Serverless 中的 Fass， 从项目中 cloudfunctions 中看到有三个文件夹，对应三个函数，每一个函数都是一个服务。有关于 Serverless 的介绍，可以看[Serverless 给前端带来了什么](https://github.com/dt-fe/weekly/blob/master/94.%E7%B2%BE%E8%AF%BB%E3%80%8AServerless%20%E7%BB%99%E5%89%8D%E7%AB%AF%E5%B8%A6%E6%9D%A5%E4%BA%86%E4%BB%80%E4%B9%88%E3%80%8B.md)
