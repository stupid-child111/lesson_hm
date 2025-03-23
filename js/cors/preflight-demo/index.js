const http = require('http');

const server = http.createServer((req, res) => {
    const origin = req.headers.origin;
    const  headers = {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        // HTTP 协议允许开发者自定义头部字段，以扩展请求或响应的功能。通常，自定义头部会以 X- 开头
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Custom-Header',
        'Access-Control-Max-Age': '86400',
    }
    if(req.method === 'OPTIONS') {
        //预检请求
        res.writeHead(204, headers);
        //204 No Content 服务器成功处理了请求，但不需要返回任何实体内容
        //预检请求
        console.log('预检请求');
        res.end() 
    }
    if(req.method === 'PUT' && req.url === '/data') {
        res.writeHead(201, headers);
        console.log('PUT 请求成功');
        res.end('PUT  请求成功')
    }else{
        res.writeHead(404, headers);
        res.end('404 Not Found')
    }
})

server.listen(3000, () => {

})