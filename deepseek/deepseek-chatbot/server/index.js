//commonjs
//node 最简单的后端框架
const koa = require('koa');
//实例化
const app = new koa();//后端应用
const Router = require('koa-router');//路由
const router = new Router();//实例化

const axios = require('axios');

//添加跨域支持功能
//ctx = req 中间件 (跨域 路由 错误处理... )  res     
//next
//中间件 middleware
app.use(async(ctx,next) => {
    console.log('--------------跨域中间件');
    //设置HTTP响应头  "*"修改成白名单
    ctx.set("Access-Control-Allow-Origin","*");
    //只读  保证服务器端安全性  req 请求行 请求头 请求体
    ctx.set("Access-Control-Allow-Methods","OPTIONS, GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers","Content-Type, Authorization,Cookie");
    //如果是预检请求(OPTIONS) 直接返回 204 No Content
    if(ctx.method === 'OPTIONS'){
           //返回 响应头 http 状态码为 204     
           // 201 创建成功 created  200 OK
        ctx.status = 204;
        return;
    }
    await next();
})
// app.use(async(ctx,next) => {
//     console.log('--------------解析参数中间件')
//     next();
// })

//新建首页 / 路由
router.get('/', async (ctx) => {
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
//流程 前端 react axios 向 /chatai 发送 post 请求
router.post("/chatai", async (ctx) => {
    const message = 'hello';
    const data = {
        model: 'deepseek-r1:1.5b',//按需选择，进行定制
        messages: [{
            role: "user",
            content: message
        }
        ],
        stream: false
    }

    //拓展: axios 可以做更多的配置 处理更复杂的情况 配置baseUrl  超时时间 请求之前带上Authorization
    //发送请求就用 axios (封装的fetch比较简单) 然后转发请求
    //axios 发送请求就用他 转发请求
    //AI 应用集成
    const response = await axios
    .post("http://localhost:11434/api/chat",data)
    .then(response => {
        //安排业务
        // console.log(response.data);
        ctx.body = {
            //请求成功
            code: 200,
            content: response.data.message.content
        }
    })

    
})



app.listen(3000, () => {
    //本地私服状态
    console.log('服务启动在 3000 端口');

})