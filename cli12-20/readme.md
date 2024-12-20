# Vue + React  Cli 命令行

- vue-cli command line

  - 负责比较复杂的大型项目,并非简单的要全面==页面开发(直接引入cdn就行)
    web app 而非page

  - npm init vite
    vite 前端项目构建工具  前端基建工具(工程化核心套件)
    npm init 初始化项目 通过 vite
    - 标准项目模板
      - 无需每次配置
         //"@vitejs/plugin-vue": "^5.2.1",
         //"vite": "^6.0.3" 报错import
         使用vite 6 以上报错



- 介绍模板结构
  - package.json
   - 查看依赖
    - vue ^3 开发和上线都需要
    - vite ^5 开发阶段需要，上线丢弃(前端基建)

    - 工程的不同生命周期(阶段)
      - **dev 开发阶段**
      - test 测试阶段
      - **build 上线阶段**
      - online 运营维护

      - "dev": "vite",开发阶段
    "build": "vite build",打包阶段
    "preview": "vite preview"预览阶段


    - npm run dev
      - http协议 5173端口 找到 项目主页面 index.html
        - 首页 website
        - 挂载点  #app
        - src/main.js 项目的js入口文件


    - src/main.js
      - src 开发目录
        开发主战场
      - main.js 入口文件
        createApp().mount('#app')
      - App.vue  如果创建后没有颜色，下载plugin   vue-official
        .vue  专属后缀
          - 三段式
            - template 模板 (结构)
            - script 脚本 (逻辑)
                 声明响应式
                 事件
            - css(样式)     

       - .vue 好用 胶囊
       - 组件就是 > html 的页面构建模块
         组件是现代前端的开发新单元( > html)
         组件 = 由一个逻辑单元的html 结构 + js(逻辑) + css(样式)组成
         某项功能的抽象

       - 现代前端拥抱组件思维
       - 组件按功能划分
       - 组件 = html(一堆) + js(一堆) + css(一堆)
       - .vue 三段式组合该组件
       - 轮播图  功能属性凸显 经典组件
       - 前端的开发单位是组件，并非页面(重复  轮播图)
         为何不能以html 为单位？ 单个功能弱小
       - 从工程化角度理解组件
         - 按功能快划分，方便安排工作
         - 组件可复用性高(.vue ) import(引入)
         - 组件可维护性高

       - 组件以标签的方式嵌入页面