const WebSocket = require('ws')
const http = require('http')

//1. 创建一个HTTP服务器
//2. 创建一个WebSocket服务器
//3.建立一次 http 连接
// 发送http请求找到 端口
// const ws = new WebSocket('ws://localhost:3000/ws');
//然后就直接使用websocket服务
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.end('WebSocket Server')
})
//web +    socket
//先 http  再升级为ebsocket
const wss = new WebSocket.Server({
    //基于http服务器  单向
    //双向
    server, 
    path: '/ws' 
})
wss.on('connection', (ws) => {
    console.log(`Client connected`)
    //双向通信
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`)
        ws.send(`Server received: ${message}`)
    })
    ws.send('Hello! Welcome Come to the WebSocket server')
})
server.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})