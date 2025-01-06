# vue 全家桶之 vue-router

- vue 语法 组件(vue2 (选项式)/ vue3(组合式  大型项目200行以上) )、响应式、生命周期、指令(v-...)、三种数据(自有数据ref、props、computed)

- vue-router 路由   vue的周边生态
  - 跳转页面
  
- vuex/pinia 状态管理

## vue-router
- 将接管路由，控制页面跳转
- router-link 取代 a 标签
  a 标签
  router-link  组件包含a标签的功能，当组件切换时，路由对应的组件显示到相应位置
  要启用
  组件没有生效，无法识别的组件 --> 降级为div元素，作为html标签
 - 启动步骤
   - 1 向 vue 添加 vue-router



- router 专门目录
  - index.js 入口配置文件
  - router-link 是vue-router 提供的组件只要使用 .use(router) 不需要引用就可使用


- 业务熟练度
  - vue-router 语法细节
     - routers 拆分(亮点)
       [
        /
        /About  顶级路径
        ...users   // 用户模块
        ...posts   // 文章模块
       ]
       展开运算符
      - path， component
        - name  
        - props  路由传参

- 路由历史记录 history
  router-link  而不是 a  (实现组件功能)
  router.push() 入栈
  栈顶是当前的路由，显示相应的组件
  可以进行前进后退切换页面
  ————>导航 =  rul + history navigator


- 实战开发
  - stylus
    加速css开发
    npm i -D stylus 当前项目安装 stylus包
    可以省略 {}  :; -->用tab 缩进代替
