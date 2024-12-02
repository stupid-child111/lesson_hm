//基于openai 大模型的开发
// 1. 引入 OpenAI 库
import OpenAI from "openai";
// console.log("Hello,world!")

//创建openAI实例
const openai = new OpenAI({
  apiKey: "sk-8lYWtDbQ4gjUzQaDBppk6SUgAtATONJmYWHGHyL2FE6JdT71",
  baseURL:'https://api.302.ai/v1'
});

const response = await openai.completions.create({
    model:'gpt-3.5-turbo-instruct',
    prompt:`请帮我写一段有关与xiaomi
     SU7的介绍`,
    max_tokens:256,
})
console.log(response)