# AI Aaaistant 全栈项目

- 大前端全栈
- 以后端全栈为主
  - 设计模式(思想)
     大前端  前端 MVVM  model(数据状态  useState，ref/reactive
     ， api/axios 接口， pinia)  view 
     model 模型层 = 数据定义 + 数据存储 + 数据管理 + 数据请求
     view 视图层 = component 组件 从原子层面剥离(html js css)
     vm 视图模型层 数据绑定(模型层)  数据驱动界面(v-if/v-show/v-for)
     事件监听 

     产品设计线框图


     后端 MVC  根据数据库 mysql 表table 建立模型  叫做model
     model 数据库独立于后端的  数据模型文件 schema orm
     view 试图层 = 前端页面 index.html  about.html
     controller 控制器层

  - 并发数
  - 基础设施
  - DDos 肉鸡攻击  qps


## 后端全栈AI 项目
- python flask 框架  node koa
  app.py 单点入口
- 纯js
- deepseek 在线api

## 文章 + leetcode 

## 项目准备
- python 安装
Python 3.12.8
- 配置虚拟环境
  本地依赖  不受全局环境影响 不影响全局
  python -m venv ai-assistant
  项目下存在项目依赖包

- 安装依赖
  pip install flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/
  falsk flask koa 后端框架
  openai 已经成为 aigc LLM 的事实标准
  /completion /chat
  base_url 转入deepseek

  没有前后端分离(MVC开发框架)
    - 前端存放在 static 目录下
    - 通过路由 /  显示index.html

- 何为静态文件
  - js/css/img 前端FE
  - 启动一个静态服务器

- 状态码
  1XX 请求中...
  2XX 成功... 201 created  204 No Content
  3XX 重定向
  4XX 客户端错误
    405 Method Not Allowed
  5XX 服务器端错误

响应头里第一个数据包 浏览器 或者程序  通过状态码就知道怎么处理
状态码是程序逻辑的一部分

- env 文件


## 界面

- html 结构
   - 写注释
   - 图标字体库 font-awesome iconfont
     - 性能优化
     - 小图标都用图片，http 请求数的暴涨，网页同时并发请求数有限
     - 下载一个图标字体库
     - fas fa-comment-alt
     - font-awesime 不提供选择，都是一样的  iconfont 提供定制

   - css 样式的组合 面向对象特性 多态 方便复用和维护
     tailwindcss 原子类
   - textarea LLM支持比较多的tokens 出入长度  kimi deepseek

   - 语义化标签
   - 无障碍访问
     label + for
   - form 表达增强功能
     input type [number|range......]
     placeholder

- **CSS**
   - 弹性布局
     - 居中
       子元素相对父元素的居中
       justify-content:center  横轴 flex-start spac-between
     - align-items 纵轴
     -flex-direction：row|column
   - grid 布局
     display：grid；
     grid-template-columns：1fr 1fr；
     grid-template-rows：1fr 1fr；

   - 响应式布局
     width max-width 
     @media screen and (max-width: 768){

     }
   - transition animation
     - width transition ipad 旋转屏幕
     - transition:分别设置多个属性
   - 面向对象思想
     - 封装 多态 继承
     - button 样式组件  基础组件
       UI风格 antd
     - 组合业务样式
       primary secondary default  --> tailwindcss
   - calc
     CSS中执行简单的数学运算，用于动态布局设计中精确控制元素大小与位置
     性能有一定的问题
   - flex: 1;
     flex-grow 1  其他子元素没有设置， 主元素，其他元素占完后，剩下的都归他来grow；多个子元素都设置，按比例划分。
     flex-basis
     flex-shrink

## js
   - 用户体验
     - keydown.enter 阻止默认行为
     - event.preventDefault
   - promise 的的使用
      await 后面的肯定是promise 或者返回promise实例的函数
      then 链式调用
        处理函数返回的任然是promise链式调用
        如果不是 promise.resolve()包一下

    - BOM 
      - navigator.userAgent
      操作系统  浏览器版本  内核
      - navigator.cliboard
      剪切板 ctrl + c
      - localStorage
        - 本地存储
        - 本地存储大小  5M  cokie kb 每次请求都会带上
        - getItem(null) 返回 null
        - setItem
      - array,string 方法强化一下
        slice
      - event 事件机制
        - dom level  和 event  两个概念  dom level 涉及 event相关的定义
        - onclick(内嵌 DOM 0级事件)  addEventListener(事件监听  DOM 2级)
        - 小红书 (JS高级程序设计)
        - **事件冒泡 | 捕捉**
        - **事件委托**
          事件监听  内存开销比较大
            - 利用冒泡机制 父元素上监听一次  性能好  事件委托
            - event.target  目标元素  data-index  数据属性

      - 产品需求
        - 产品经理提出产品需求
        - 设计师 界面设计
        - 前端 vue/react 完成需求
          - 分析
          - 技术设计
          - 代码实现
          - debug
          - 交付上线
        - 后端 数据和MVC 提供api  

   - 代码风格
     - 注释
     - 封装
       - 一个函数只做一件事
       - 一个函数不超过10行 

     -  es6+ 风格
       promise + async/await
## 业务开发
  - 界面业务
    - grid布局
    - transition
    - css 面对对象
  - scrollToTop  业务
  - 发消息业务
  - 流式输出
  - 剪贴板功能
  - 聊天历史分组功能