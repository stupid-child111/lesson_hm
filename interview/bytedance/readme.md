# 字节面试准备
- promise_all 实现
  - fs.readfile  node
     node 异步无阻塞  no blocking  性能好 相同访问node服务器开销是java的20% 服务器性能提升
  - 异步 I/O  不好控制执行顺序
    - callback函数  回调 es5
    - promise
    - async await
    按顺序读取
    I/O 慢(硬盘) 内存(读取数据较快一个数量级)
    从硬盘到内存 读取/输出 I/O

  异步三种解决方式  逐步进化   异步变同步
    es6之前  callback 函数  回调地狱   早期业务不复杂
    es6  promise   链式调用   .then 之后 return promise
    es8 async await    基于 promise + async await  已经和同步写法相


    ## 掌握
   - 了解promise
   - return promise thenable
   - 封装 一个promise 函数
   - 表达简洁性

- 异步任务，并发执行怎么办

- 多个异步任务  all
  - **promise实例**放到一个数组里面
  - **Promise。all()** 方法接受一个数组作为参数，数组中的每一个元素都是一个 Promise 实例。
  - 所有的promise 执行完，才会返回结果
  - 按照promise 实例的顺序返回结果
  - 一个失败，返回失败的结果

  - race
    返回第一个被解决的任务，不管是成功还是失败  不返回数组

  - allSettled 
    返回所有的结果不管成功还是失败
  - any
    - 只要有一个成功，就返回成功的结果

-并发 --> **并行**