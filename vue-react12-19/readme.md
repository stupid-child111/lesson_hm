# react 学习路径

  - react 基本语法
  - hooks 相关
  - 全家桶
  - 状态管理
  - react 源码
  - Antd ...
  - ts

- AI coding
  - VUE & React 双修
  - 自然语义编程
    tailwindcss 语义
    antd  组件
  
  - 给一张设计稿 -->生成组件


- http(CDN 更快) 引入 前端组件库
  - vue

- 挂载点
  将前端工作交给vue/react，在html里只需要一个**挂载点** #root
  挂载Vue App 应用实例


-  vue的开发哲学  focus 业务方面的现代前端框架
  - Web应用是数据驱动的界面
  - vue事件机制  方便  @event="handler"
  - 响应式编程
    - ref(0)  包装简单数据类型成为响应式对象
    - .value=""  修改 value 值改变的同时,界面热更新
    - 规避 DOM 编程
    - 不需要为 API 编程而注重 业务开发

- App 和传统编程的区别
  - createApp 创建 Vue App
  - #root 结合
  - #root里面就是 vue的世界
    {{count}}
  - {{}}  vue的数据占位符
    可变
    不需要document.querySelector("")
    {{ data }}
    setup(){
      return {
        data
      }
    }

    挂载点 创建一个应用  return