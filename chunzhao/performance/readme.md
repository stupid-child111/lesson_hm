# 性能优化

- 渲染方面有没有考虑性能优化
  - 重绘重排
    - 重绘
      - 当元素的样式发生改变，浏览器重新绘制元素的过程，但是不影响布局的，比如颜色，背景等属性。
    - 重排
      - 当DOM元素的布局发生改变，比如宽高，位置，字体大小,浏览器重新计算布局大小，影响到其他元素的位置和大小
  - 重排必定会导致重绘，重绘不一定会导致重排

- bad work
  - 批量修改DOM
    使用切换类名或cssText 代理流程化一句句写
  - 文档碎片
    document.createDocumentFragment()
  - 脱离文档流进行操作
    先脱离文档流
  - 缓存布局信息
    缓存布局信息，减少重排
  - 使用 transform 代替位置调整

# 资源加载优化
  - 图片懒加载
    - getBoundingClientRect() 获取元素的位置信息，判断元素是否在可视区域内，如果在可视区域内，就加载图片
    - intersectionObserver 监听元素是否在可视区域内，如果在可视区域内，就加载图片   
    - 路由懒加载
      - ()=> import('') 异步加载路由组件，只有当路由被访问时，才会加载路由组件，减少首屏加载时间
      - 代码分割(code spliting)  懒加载的代码独立文件
    - 资源预加载 preload
      - 预解析 DNS
        <link ref="prefetch" href="next-page.js" />
      - CDN 静态资源使用内容分发网络

## Js 执行优化
  - 防抖节流

  - web worker 为提升计算性能的html5新特性，用于在后台线程中执行计算任务，避免阻塞主线程，提高页面性能
  - requestAnimationFrame
  - requestIdleCallback  react fiber 机制


## 框架层面优化

  - keep alive 缓存组件  减少组件的销毁和创建，提高性能
  - react useMemo  memo  useCallback
  - key  优化列表渲染

## 缓存策略
  - localStorage sessionStorage  cookie  缓存策略

  - 文件缓存  强缓存 && 协商缓存

## 网络优化
  - CDN  加速
  - 压缩  gzip  brotli  静态资源压缩
  - HTTP2  多路复用  大文件上传  让网站支持新版协议
  - DNS 预解析

## 渲染首屏优化
  - SSR
  - 骨架屏 skeleton
  - 首屏数据预加载 http2.0  server push


## 监控和分析
  - preformance  性能监控
    减少首屏JS/CSS 体积
  
  - LightHouse  性能分析工具


