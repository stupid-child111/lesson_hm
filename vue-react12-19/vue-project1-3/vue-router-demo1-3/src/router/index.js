// 路由配置
import { createRouter,//创建路由实例 
    createWebHashHistory//路由模式
}     from 'vue-router'//插件

//页面级别组件 放入 views 文件夹中
import Home from '../views/Home.vue'
import About from '../views/About.vue'
//posts 模块 post 文件夹
import PostIndex from '../views/post/index/post-index.vue'
import PostShow from '../views/post/show/post-show.vue'

//路由配置
const routers =  [
    {
        path:'/',//路径
        component: Home//页面组件
    },
    {
        path:'/about',
        component: About
    },
    {
        path:'/posts',
        component: PostIndex
    },
    {
        path:'/posts/:postId',//动态路由
        component: PostShow
    }
]

//提供一个路由对象实例
const router = createRouter({  //创建路由
    history: createWebHashHistory(),//路由模式
    routes:routers//路由配置数组
})

export default router