- 认识几个url
  url的设计模式 restful api 
  网站是用来暴露资源的 如何将资源博暴露出去
  - http://localhost:3000/post/ 列表页的链接
  - http://localhost:3000/post/:id id(查询参数) 详情页的链接
  - http://localhost:3000/users/:id 用户主页链接

- 通过上面的链接可以进行数据的查询 Read操作
- 访问资源的方式
  - 浏览器  编写代码进行修改 麻烦(前期不自己写)
  - apifox 是啥？  web 请求代理()
    Get http://localhost:3000/post/1
    Patch http://localhost:3000/post/1
  - 资源 db.json users posts
  - HTTP 协议
    [Method(对应动作 POST DELETE PATCH GET增删改查) + url(对应资源)]  --->请求行
   - 请求头 Cokies  Content-Type:application(text)/json(声明为json格式) 
   - 请求体  


  - json-server 提供的功能
    1. 提供了一个db.json文件  **作为数据资源**可以模拟数据库进行CRUD(增删改查)
    2. 提供了一个api 可以通过**http协议** 对db.json文件进行操作
    3. 提供了一个web页面 可以通过web页面对db.json文件进行操作


- 会设计restful api 接口
  - 需求
    - 新增一篇文章
      http://localohost:3000/posts  post
      {
        ......
      }

    - 删除  文章2
      http://localhost:3000/posts/2  Delete


- json-server 是一个支持 restful api 设计的数据服务器

- 全栈防抖
 - 前后端分离  解耦
  - 前端 live-server 5500
    fetch 通过url
  - 后端 json-server 3000
    url 接口服务 restful
  - 结合点 api 接口



- filter、map
  - 都是Array。prototype 上的方法，所有的数组都有
  - filter 数组过滤，回调函数中返回值是否为true
  - map 数组映射，回调函数中返回值为新数组中的元素原有数组不能满足需求
  - 都有一个forEach 迭代每一项 不需要返回


- 防抖
   - 将要执行的函数交给一个debounce()高阶函数去优化
   - 减少执行次数  只执行连续输入的最后一次
   - 依靠定时器实现 本次关闭上一次的定时器