import Koa from "koa";
import cors from "@koa/cors";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import {client} from "./app.server.mjs";
import fs from "fs/promises";
import { title } from "process";

const inputFilePath = './data/posts_with_embedding.json'; // 输入文件路径

const data = await fs.readFile(inputFilePath, 'utf-8'); // 读取输入文件内容

const posts = JSON.parse(data); // 解析 JSON 数据

const app = new Koa(); // 创建 Koa 应用实例
const router = new Router(); // 创建路由实例
const port = 3000; // 服务器端口号

app.use(cors()); // 启用跨域资源共享
app.use(bodyParser()); // 启用请求体解析

function cosineSimilarity(a, b) {
    if (a.length !== b.length) {
        throw new Error('向量长度不匹配');
    }

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

router.get("/search", async (ctx) => { // 定义根路由处理函数
    const { keyword } = ctx.request.query; // 获取查询参数中的 query 值
    console.log(keyword); // 打印 query 值
    const response = await client.embeddings.create({ // 创建嵌入向量
        model: "text-embedding-3-small", // 使用的模型名称
        input: keyword, // 输入文本，包含标题和类别
    })
    const { embedding } = response.data[0]; // 提取嵌入向量
    const results = posts.map(item => ({ // 遍历每个文章
        ...item,
       similarity: cosineSimilarity(embedding,item.embedding) // 计算相似度
    }))
    .sort((a,b) => a.similarity - b.similarity)
    .reverse()
    .slice(0,3) // 排序并取前3个结果
    .map((item,index) => 
        ({id:index, title:`${index + 1}${item.title}.${item.category}`,}))
    // 格式化结果为期望的格式
    ctx.body = {
        status: 200, // 设置响应状态码为 200
        data: results, // 设置响应数据为格式化后的结果
    }

})

app.use(router.routes()).use(router.allowedMethods());  // 将路由挂载到应用实例上
app.listen(port, () => { // 启动服务器并监听指定端口
    console.log(`Server is running on  http://localhost:${port}`); 
        // 打印服务器启动信息
})