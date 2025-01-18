import { createRouter, createWebHistory } from "vue-router";
// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";
// import Login from "../pages/Login.vue";


// 路由配置数组
const routes = [
    {
        path: '/',
        name: 'Home',
        //路由懒加载
        component: () => import('../pages/Home.vue'),
        meta:{
            title: '首页',
            requireLogin: true
        },
        children: [
            {
                path: 'about',
                name: 'About',
                component: () => import('../pages/About.vue'),
                meta:{
                    title: '关于',
                    requireLogin: true
                },
            }
        ]
    },  
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login.vue'),
        meta:{
            title: '登录',
            requireLogin: false
        },
    }
]

//实例化路由对象
const router = createRouter(
    {
        history: createWebHistory(),
        //routes: routes
        routes
    }
)

//路由守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '掘金'
    if(to.meta.requireLogin){
        next('/login')
        return
    }
    next()
})

export default router