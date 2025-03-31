//对原有数据进行embedding化

//fs 
import fs from 'fs/promises';//直接await
//模块化分离
import { client } from './app.server.mjs';

const inputFilePath = './data/posts.json'; // 输入文件路径
const outputFilePath = './data/posts_with_embedding.json'; // 输出文件路径
//node promisify
const data =  await fs.readFile(inputFilePath, 'utf-8'); // 读取输入文件内容
const posts = JSON.parse(data); // 解析 JSON 数据
console.log(posts); // 打印解析后的数据

const postsWithEmbedding = []
for (const {title, category} of posts) { // 遍历每个文章
    const response = await client.embeddings.create({ // 创建嵌入向量
        model: "text-embedding-3-small", // 使用的模型名称
        input: `标题：${title}  分类：${category}`, // 输入文本，包含标题和类别
    });
    postsWithEmbedding.push({ // 将嵌入向量添加到文章对象中
        title, // 标题
        category, // 类别
        embedding: response.data[0].embedding, // 嵌入向量
    });
}

await fs.writeFile(outputFilePath, JSON.stringify(postsWithEmbedding)); // 将带有嵌入向量的文章写入输出文件
//完成原有文件的embedding化