const express = require('express');
const path = require('path');
const multiparty = require('multiparty'); // 用于处理文件上传的中间件
const fse = require('fs-extra'); // 用于操作文件的库
const cors = require('cors'); // 用于处理跨域请求的中间件
const bodyParser = require('body-parser'); // 用于解析请求体的中间件
const { ok } = require('assert');

const app = express();// 创建一个 Express 应用实例

app.use(bodyParser.json()); // 使用 body-parser 中间件解析 JSON 格式的请求体
app.use(cors({
    origin: 'http://localhost:5173', // 明确指定前端地址（假设使用 Vite）
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  })); // 使用 CORS 中间件，允许跨域请求

const uploadDir = path.join(__dirname, 'uploads'); // 定义文件上传的目录
//__dirname 是 Node.js 中的一个全局变量，表示当前模块的目录名


//提取文件后缀名
const getFileExt = (filename) => {
    return filename.slice(filename.lastIndexOf('.'), filename.length)
}


app.post('/upload', (req, res) => {
    const form = new multiparty.Form();// 创建一个 multiparty.Form 实例，用于处理文件上传
    form.parse(req, async (err,fields,files)=>{
        //fields 包含 chunkHash fileHash
        //files  包含 chunk数组
        if(err){
           res.status(401).json(
            {
             ok:false,
             msg:'文件上传失败'
            }); // 如果解析请求体时发生错误，返回 401 状态码和错误信息
            return  
        }
        // console.log(fields,files)// 打印解析后的字段和文件信息
        res.status(200).json(
            {
            code:true,
             msg:'文件上传成功'
            }); 

            const fileHash = fields['fileHash'][0]; // 获取文件的哈希值
            const chunkHash = fields['chunkHash'][0]; // 获取分块的哈希值
            //创建临时文件存储路径
            const chunkPath = path.resolve(uploadDir,fileHash)

            //判断临时文件存储路径是否存在，不存在则创建
            if(!fse.existsSync(chunkPath)){
                await fse.mkdir(chunkPath)
            }

            //将切片到自己设置的临时文件存储路径
            // path: 'C:\\Users\\Lenovo\\AppData\\Local\\Temp\\cfx7Mov6MQk5RkVWpPfsYTjj'
            //移动文件到临时存储路径
            const oldPath = files['chunk'][0]['path']; // 先获取切片文件的路径

            await fse.move(oldPath, path.resolve(chunkPath, chunkHash))

    })
})// 处理文件上传的路由

app.post('/merge', async function(req, res)  { // 处理文件合并的路由
    const { fileHash,fileName,size} = req.body // 获取请求体中的数据
    // console.log(fileHash,fileName,size)// 打印文件哈希值、文件名和大小    

    //如果已经存在，不需要合并 直接返回
    //filePath 是合并后的文件路径
    const filePath = path.resolve(uploadDir, fileHash + getFileExt(fileName)) // 定义文件的路径 得到文件名和后缀
    //判断文件是否存在
    if(fse.existsSync(filePath)){
        return res.status(200).json(
            {
            ok:true,
             msg:'文件已经存在'
            })
    }

    //如果不存在，需要合并

    //切片存在的文件夹
    const chunkDir = path.resolve(uploadDir, fileHash) // 定义切片的路径
    //判断切片是否存在
    if(!fse.existsSync(chunkDir)){
        return res.status(401).json(
            {
            ok:false,
             msg:'文件不存在，重新上传'
            })
       
    }

    //合并切片
    const chunkPaths = await fse.readdirSync(chunkDir) // 读取切片目录中的所有文件
    console.log(chunkPaths) // 打印切片文件的路径数组
    //对切片文件进行排序
    chunkPaths.sort((a,b)=>{
        return a.split('-')[1] - b.split('-')[1] // 按照切片的序号进行排序
    })
    const list = chunkPaths.map((chunkName,index)=>{
        return new Promise(resolve => {
            const chunkPath = path.resolve(chunkDir, chunkName) // 获取切片文件的路径 
            const readSteam = fse.createReadStream(chunkPath) // 创建读取流
            const writeSteam = fse.createWriteStream(filePath,{
                start: index * size, // 写入文件的起始位置
                end: (index + 1) * size // 写入文件的结束位置
            }) // 创建写入流
            readSteam.on('end', async (err) => {
                await fse.unlink(chunkPath) // 删除切片文件
                resolve() // 解析 Promise
            });
    
            readSteam.pipe(writeSteam) // 读取流的数据写入写入流  管道流
        })
    
    })

    await Promise.all(list) // 等待所有切片文件合并完成
    // 强制清空目录（双重保险）
    // await fse.emptyDir(chunkDir);
    await fse.remove(chunkDir) // 删除切片目录
    

    res.status(200).json(
        {
        ok:true,
         msg:'合并成功'
        })
})

app.post('/verify', async function(req, res) { // 验证文件是否存在的路由)
    const { fileHash,fileName } = req.body // 获取请求体中的数据

    console.log(fileHash)
    console.log(fileName)// 打印文件哈希值和文件名

    //filePath 是合并后的文件路径
    const filePath = path.resolve(uploadDir, fileHash + getFileExt(fileName)) // 定义文件的路径 得到文件名和后缀

    //返回服务器上已经存上传成功的切片
    const chunkDirectory = path.resolve(uploadDir, fileHash) // 定义切片的路径
    let chunkPaths = [] // 定义切片路径数组
    //如果存在对应的临时文件夹才去读取
    if(fse.existsSync(chunkDirectory)){
        const chunkPaths = await fse.readdir(chunkDirectory) // 读取切片目录中的所有文件
        // console.log(chunkPaths) // 打印切片文件的路径数组
    }




    if(fse.existsSync(filePath)){
        res.status(200).json(
           {
           ok:true,
           data:{
            shouldUpload:false // 文件已经存在，不需要上传 
           }
        })
    }else{
        res.status(200).json(
            {
            ok:true,
             data:{
              shouldUpload:true, // 文件不存在，需要上传
              existChunks:chunkPaths // 返回已经存在的切片文件
             }
            })
    }
})


app.listen(3000, () => {    // 监听 3000 端口，启动服务器
    console.log('Server is running on http://localhost:3000');
})  