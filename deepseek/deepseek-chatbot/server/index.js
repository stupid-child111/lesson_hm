//commonjs
//node 最简单的后端框架
const koa = require('koa');
//实例化
const app = new koa();//后端应用
const Router = require('koa-router');//路由
const router = new Router();//实例化

//新建首页 / 路由
router.get('/',async (ctx)=>{
    //响应体  最终目的 达到响应
    //ctx 这一次 请求(request) 响应(response) 的上下文
    ctx.body = `
    <html>
    <head>
    <title>chatbot</title>
    <body>
    <h1>chatbot</h1>
    </body>
    </head>
    </html>
    `;
})

//1.实例化  2.新建路由  3.路由挂载app上
app.use(router.routes())


//新建一个 chatai 路由
//路由组成  method url
//post  通过模拟方便发送(apifox)
//后端 只需要返回 api 接口数据 json数组
router.post("/chatai",async (ctx) => {
    ctx.body = {
        code: 200,
        message: '我是deepseek,你有什么问题'
    }
})

app.listen(3000, () => {
    //本地私服状态
    console.log('服务启动在 3000 端口');
    
})