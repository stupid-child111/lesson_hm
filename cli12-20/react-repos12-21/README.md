# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# react repos 显示项目列表

- 用户的仓库列表
  - 开发 repos 组件

- react 组件
  - .vue  , .jsx组件
  - 从components  ->挂载 App.jsx
  - 相比于vue三段式更清楚   react 函数即组件  
    - 首字母大写
    - 返回html，JSX

  - vue 和 react相同点
    - 组件化
    - 现代前端编程框架
    - 工程化脚手架cli
    - 数据绑定 {{}}  {}
    - 响应式，数据驱动，不需要 DOM 耗性能操作
  - vue 和 react差异
    - .vue .jsx
    - 三段式template + script + css  函数即组件
    - vue入门快 api丰富(tmeplate script 都属于api)
    - react难   纯粹(JS高手)
    -  vue css 位于组件内部  react 单独存放
    - 组件 = 组(逻辑+样式+模板) 合起来完成一个功能拆分
    - vue template 模板     react  JSX
      - JSX 是react最大特点  在函数中最方便表达UI部分
        本身不可以，react回去解析JSX  html(XML) in js
      - 不能写class  className
        - class 是js 关键字
        - className 是html 标签属性
  
  - 组件类
   - 封装 import + export default  完成功能拆分
   - 函数 (构造) 组件  必须 return html
   - 组件可复用
   - 封装 UI + 响应式(动态)数据
     面对对象 属性 + 方法
   - 只要写原生JS 即可