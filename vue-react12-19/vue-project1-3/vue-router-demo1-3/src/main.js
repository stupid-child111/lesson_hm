import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'//路由对象提供  ./router/index.js会自动导入index.js

createApp(App)// vue根组件 ——>
  // app对象 use 方法
  //focus 业务
  //vue周边生态起来了
  .use(router)  // 插上路由
  .mount('#app')//——>挂载点

// createApp(App)——>.use(router)——>.mount('#app')
 
// const app = createApp(App)
// console.log(app);//app方法
// app
//    .use(router)//插件使用路由功能
//    .mount('#app')//————> 挂载点