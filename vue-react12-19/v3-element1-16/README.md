- 如何开发一个vue项目
  - vite 负责工程化
    npm init vite
  - vue  核心语法(响应式、组件化、指令....)
    前端框架
  - vue-router 路由
  - pinia 状态管理
  - element3 UI组件库
  - stylus css预处理器
  - axios  ajax 请求封装库


- app.use
  向vue app 中注册插件  让生态去做事情
  element3 提供的组件库可以全局使用
  - 注意问题  
  - element3 组件 以 el- 开头
  - 不要重复造轮子  覆盖70%常见组件需求
  - 性能问题
    页面加载变慢  按需加载 需要按钮就加载按钮(Elbutton)不用引入Element3

## 项目亮点

- 项目全面使用es6 风格
  代码 简洁 易读 易维护
   routes: routes  修改为  routes
- 良好的注释  代码可读性
- 良好的git 提交记录和习惯
- 按需加载 vue组件库element3  性能优化 页面加载速度提升
- 路由
  - 多级路由
    二级路由  path 前不用 /
  - path, component, name.meta 
  - 路由懒加载
     最佳用户体验 快速
     按需加载 页面级别组件  import函数式引入 () => import('')

  - 添加路由守卫

- 表单组件
  - 看文档
  - :model 收集表单数据
  - ref 获取表单实例
    - 有时获取一个DOM元素 (组件对象)
    - 需调用相对应的方法
    - template 用ref标记 DOM | 组件
    - const formRef = ref(null) 挂载前为null
    - 挂载后获取到
  - 表单的校验
    - rules
    - items prop
    - 调用 validate 方法 boolean


- 布局组件
  - Elcontainer
  - Elheader
  - ElAside
  - ElMain
  - ElRow
  - ElCol


子路由的路径