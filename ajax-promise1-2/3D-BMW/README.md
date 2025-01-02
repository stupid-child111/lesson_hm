# vue 3 组件的生命周期
  - 组件类实例化
     template 模板的编译, css的合成, js的执行
# v-if 切换卸载/v-show 切换显示 
  - 条件渲染 
  - 区别
     v-if  挂载到 DOM 中显示
     v-show 通过 display:none css 切换
   - 显示--> v-if  销毁
   - 隐藏--> v-show  不
  - 有的组件需要 toggle 显示/隐藏 
     弹窗、广告、loading...
    - 响应式数据 showComponent
    - 页面状态？

- 组件是一个类 Vue.Component  LifecycleComponent ref+defineProps ...new 实例化
  template + css + js 组合，准备后————> 挂载到父组件————> 渲染到页面