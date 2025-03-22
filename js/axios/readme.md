- 面试 区分度
  - 源码能力
  - axios源码 大厂面试时候的考点

- axios 基于 ajax or fetch？
  ajax XMLHttpRequest对象
  axios http 统一请求标准库

- axios baseURL
  - 所有请求前都加上
  - 切换开发环境的时候，本地和线上的地址不一样

- ajax 和 fetch区别
  - ajax 是一种基于 js 的早期异步请求技术(之前不可以主动向服务器发送请求)(依赖微软IE5，6ActiveXObject --> XMLHttpRequest 提供)，
  支持多种数据格式(可以是text xml JSON.parse(responseText))，但是较为复杂
  兼容性更好    Asynchronous Javascript and XML 异步的JavaScript 和 XML
  - fetch 现代浏览器支持的API，基于promise语法，语法简洁  返回 json(统一标准)
