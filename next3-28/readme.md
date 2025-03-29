# next
- react 全栈框架
  - SSR 服务器端渲染
    - 受屏加载快
    - SEO
   next.js是强大的React全栈框架，支持SSR，首屏快且利于SEO，开发高效
  - tailwind  vercel开发
  01.dev AI代码生成工具
  - 特别适合做企业站

- notebook  笔记本项目
  - 后端 CRUD
   - next.js 全栈框架
   - redis(内存级别数据库)  mongodb  NQSQL
  - 前端
   - noteList
   - search
   - new
   - edit
   - delete

- 设计哪些组件？
  - layout 布局组件
  - page  页面组件
    - component 功能组件

- 约定俗称的next
  - alias  jsconfig.json 别名
  - 约定路径
    - 布局组件：layout/  约定路径
    children  相当于 vue 中 slot
       - 页面路径：pages/  约定路径
    - 组件路径：components/  约定路径
    - 样式路径：styles/  约定路径

- SSR 服务器端渲染
- SEO
- SEA 单页应用


import dayjs from "dayjs";
dayjs 服务器端使用 不属于浏览器环境  app-pages-browser
"use client";
可以使dayjs前端渲染

import Redis from "ioredis";


- uuid 组件库  解决并发
  生成唯一id

- 组件的设计
  - 组件的拆分粒度
    - 方便复用
    - 方便管理
    - 方便下线更新(直接删除组件即可)
  - 复杂组件
    SidebarNoteItem 
    - 可折叠，可收起
    - skeleton 骨架屏
      - 用户体验优化方案
        比loading圆圈加载好在哪？
    - 动态样式  展开样式 激活样式
    - 新增/修改后的动画效果   flash
      触发onAnimationEnd  事件  移除flash

- react hook
  - useRef
  - useTransition  hook函数方便  发生transition效果  将isPending true

- next.js 服务器端组件和客户端组件
  - SidebarNoteItemHeader   粒度细化，拆分后成为了服务器端组件
  - SidebarNoteItemContent  事件交互...  
  - EditButton 封装按钮(公共)组件
  use client 声明


- Suspense
  - Suspense 用于处理异步加载，实现优雅过渡
  - fallback
  - 组件的 promise


- 详情页
  - 在 promise 之前 loading.js  会显示
  - skeleton
  - marked  第三方库  解析markdown  转成html
  - sanitize-html  第三方库  过滤html标签  防止XSS攻击
  - dangerouslySetInnerHTML  不安全的html标签
     ```js
     代码文本，不要运行
     ```
     <pre></pre>引用
     <pre><code>代码文本，不要运行</code></pre>  代码文本，不要运行