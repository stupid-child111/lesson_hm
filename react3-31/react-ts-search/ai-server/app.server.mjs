//模块化  openai 实例化
import  OpenAI  from "openai";
import dotenv from "dotenv";

dotenv.config({
    path:".env",
}); //加载.env文件中的环境变量到process.env对象中

export const client = new OpenAI({ //创建一个OpenAI实例
    apiKey: process.env.OPENAI_API_KEY, //从环境变量中获取API密钥
    baseURL: process.env.OPENAI_BASE_URL, //从环境变量中获取API基础URL
    })
    // console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);