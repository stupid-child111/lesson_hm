# react jsx


- es6 代码 很老的浏览器不支持  es6 2015发布
  const => var
  转化另一种形式
  **babel** 技术
  es6 => es5

  例如 stylus
    .styl => css    
- JSX => 原生 js 执行的代码

- babel 
  - 可以让任何的 js 新特性， 立即投入代码生产使用
    满足当前环境所需  比如 async/await  es7新特性 也能通过babel转化为es5
  - es6 能快速到来的，得益于 babel 工程化转译工具
  - 前端工程化 成熟 vite/babel/stylus/webpack
  - vite 工程总负责  babel 负责代码转译
  - 家族
    @babel/core 核心转移逻辑 eg： const => var
    @babel/cli 命令行工具 npx babel src -d lib
    @babel/preset-env 配置转译规则
    presets 预处理 其中一个规则”@babel/preset-env”

  - npx babel es6.js -o es5.js
    场景 项目在其他设备上运行，不需要下载太多包
    npx 不用安装， 直接执行某个包
    - @babel/cli 先工作 npx babel...跳过安装 直接执行
    已经安装 npx 找到 node_modules/.bin/babel 命令执行
    - @babel/core 核心转译逻辑
    - .babelrc 配置文件
      presets 预处理  @babel/preset-env 规则  按照运行环境需要

    - @babel/preset-react
      转化react中jsx语法为原生js

    使用bebel转化后还需要在.babelrc 中配置


- jsx
  - 并不是 js 新特性 否则只需要 @babel/preset-env 就行
  - 属于 react UI组件语法 组件编写简单 可读性好
   js中书写 html
  - jsx 不可直接运行 由 babel 按照 @babel/preset-react 规则转化为 js
  - 使用 React.createElement(tag,props,children) 转化为 js
  - 生成虚拟DOM

- jsx 的理解
  - 原生DOM 性能差 直接用 重新回流重绘
  - vue/react 封装 DOM 操作 性能好 VDOM
    React.createElement(tag,props,children)方法
    可以聚焦于业务开发 而非DOM操作
  - babel 在， 设计 JSX UI 组件语法 在js中写html
    babel 转译 jsx语法 为 React.createElement(tag,props,children)
  - html UI 开发 简单
  - 进入 react 函数式组件中