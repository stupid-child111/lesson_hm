# 大文件上传

-技能点?
- 切片
-体验 快,稳定
- 断点续传
blob
http 1.1 管道化
多路复用(二进制帧)
http2.0, 并发 更快


- 切完片后 传到服务器的是啥?
- 切片
- 合并

- 后端 合并切片
  流式处理
  fs.createWriteStream()
- 前端
  html5新特性  blob file.__proto__ = blob.prototype.slice
  html5 新特性  FormData  表单数据  localStorage  sessionStorage  cookie
  FormData 表单数据 append  二进制对象  二进制对象

- 后端
  - multiparty  中间件  拿到 post 请求体数据
    区别于一般的表单请求  带有附件
    multiparty  可以解析表单数据和文件数据 尤其是用于解析文件上传的POST请求体的中间件
    - 临时存放切片
    - 合并切片 fs.createWriteStream()
    - 删除切片
    - fs-extra 是node.js拓展文件系统模块，提供更多实用便捷文件操作方法
    - promise.all 判断切片是否**全部**上传成功
      - 进行合并


- 合并切片
  - /merge 路由
  - 数据包传输一般是有序的

- eventemitter3  事件总线  发布订阅模式  解耦  异步

- verify
- 快传
  - 切片hash值  唯一值 作为标识
  - 服务器端判断是否存在该切片  如果存在 直接返回该切片  不需要上传
  - 客户端判断是否存在该切片  如果存在 直接使用该切片  不需要上传

- 实现断点续传
 - 没有传输的切片
 - 失败的切片重传
  verify  验证切片是否完整  返回的uploadedChunk filter
  将未完成的切片(比较size) 和 未传(不在返回的uploadedChunk)的切片 重新上传

- 暂停上传
  - 不是所有的切片都需要上传
     3G  限流
     Promise.all 使用  控制并发
     Promise.all([Promise.all()])
  - 切片没上传  isPaused
  Promise.all 下手  
  AbortController  abort() 中断请求  取消请求

- promise  限流实现
   任务对列 Task Queue + promise.all 实现

- web worker
   hash计算有点耗时
   离线放入 web worker 中计算  主线程不阻塞  计算完成后  通知主线程  主线程再合并切片