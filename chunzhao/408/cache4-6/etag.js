const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');//加密


http.createServer((req,res) => {
    let {pathname} = url.parse(req.url,true);
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

        if(stat.isFile()){
            let md5 = crypto.createHash('md5');
            let rs = fs.createReadStream(abs);
            let arr = [];
            rs.on('data',data => {
                md5.update(data);
                arr.push(data);
            })
            //如果是文件
            rs.on('end',() => {
               let etag = md5.digest('base64');
               if(req.headers['if-none-match'] === etag){
                console.log(req.headers['if-none-match'])
                res.statusCode = 304;
                res.end();
                return;
               }

                res.setHeader('Etag',etag);
                //If-None-Match 和 Etag 
                //浏览器          服务器
                res.end(Buffer.concat(arr));
            })
        }
    })
})
.listen(3000,() => {

})