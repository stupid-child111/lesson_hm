# 浏览器缓存

xxx-phone-前端实习-AI全栈

- 二进制流传输
  - fs.createReadStream() 可读流
  - pipe 管道
  - res 流向 res --> req client 

  - 输入url 到看见页面
   - url检测
   - dns解析
     - 优化 DNS 预解析
   - tcp连接
     - 三次握手
   - http请求
     - 请求行 GET /

   - cdn 服务器(静态资源)
   - Ngnix 负载均衡(动态)
     - 负载均衡
       算法  使用 轮询  返回不繁忙的服务器
     - 反向代理
       www.baidu.com:80  :80 默认的服务器端口号

       nginx 配置 接收 :80 端口 返回 :8080 端口
   - server(硬件) 响应
     通过端口8080 --> web 服务器 (使用node/java)
     mvc

   - html 结构 到达服务器
      - http2.0  server push
      - DOM Tree + CSSOM Tree ————> Render Tree + Layout + Paint  ————> 图层(z-index transform)
      - link img  script

   - DNS 预解析
     - 使用之前访问过的静态资源，可以使用浏览器本地缓存
       - 强缓存
         添加响应头 Expires 到达之前 直接使用浏览器本地缓存 
         memory cache ————> disk cache 如果过期了 会再次请求
         缺点 用户的时钟  不准
         添加响应头 Cache-Control  max-age=3600 单位秒 到达之前 直接使用浏览器本地缓存
       - 协商缓存
         - 如果强缓存没有命中 或者 过期
         - 如果文件未改变，服务器返回 304 状态码，浏览器直接使用本地缓存 Not Modified
         - 如果文件改变，服务器返回 200 状态码，浏览器重新下载文件
         - 请求头 和 响应头
           Last-Modified (文件修改时间) 服务器端
           If-Modified-Since(文件修改时间) 浏览器端 
           ETag (文件hash值) 服务器端
           If-None-Match(文件hash值) 浏览器端
           优先级 ETag > Last-Modified
           缺点  文件修改时间  可能会有问题  比如  修改时间  但是文件内容没有改变  但是服务器会返回 200 状态码，浏览器重新下载文件


     - 使用浏览器的下载线程 /tom.png
