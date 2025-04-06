const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
//请求行  请求头  请求体(非必须)

http.createServer((req,res) => {
    let {pathname} = url.parse(req.url,true);
    console.log(url.parse(req.url,true));
    // res.end(pathname);
    if(pathname === '/'){
        //管道
        // __dirname  项目根目录的物理路径
        //项目可能要部署到服务器上
        fs
        .createReadStream(path.join(__dirname,'index.html'))
        .pipe(res);
        return;
    }
    let abs = path.join(__dirname,pathname);
    // console.log(abs);
    //获取文件状态信息
    //强缓存
    // res.setHeader('Expires',new Date(Date.now() + 200000).toGMTString());
    // res.setHeader('Cache-Control','max-age=20');

    //协商缓存
    fs.stat(abs,(err,stat) => {
        if(err){
            res.statusCode = 404;
            res.end('not found');
            return;
        }
        console.log(stat.mtime.toGMTString(),'///////////////')
        res.setHeader('Last-Modified',stat.mtime.toGMTString());  
        if(req.headers['if-modified-since'] === stat.mtime.toGMTString()){
            //协商缓存命中
            res.statusCode = 304;
            res.end();
            return;
        }
        if(stat.isFile()){
            //如果是文件
            fs.createReadStream(abs).pipe(res);
            return;
        }
    })
})
.listen(8080,() => {

})