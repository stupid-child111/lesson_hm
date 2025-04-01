const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai'); // 导入 OpenAI 实例化对象
require('dotenv').config(); // 加载环境变量文件

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // 使用环境变量中的 API 密钥
    baseURL: process.env.OPENAI_BASE_URL, // 使用环境变量中的 API 基础 URL
})

// 封装promise函数，用于回答问题
// await fs.readFile(inputFilePath, 'utf-8');
//文件内容 + 问题 --> prompt engineering(上下文)
//返回   Rag chatbot
//promise 语法糖  + generator  知识点

const readCourseInfo = () => {
   return new Promise((resolve, reject) => {
    try{
        const filePath = path.join(__dirname, '课程信息.txt'); // 构建文件路径
        fs.readFile(filePath, 'utf-8', (err, data) => { // 异步读取文件内容
            if (err) { // 如果读取失败，调用 reject 函数并传入错误对象
                reject(err);
            } else { // 如果读取成功，调用 resolve 函数并传入文件内容
                resolve(data);
            }
        })
    } catch(err){
        reject(err);
    }
   }); 
}
const answerQuestion = async () => {
    const courseInfo = await readCourseInfo(); // 读取课程信息  //  I/O操作
    // console.log(courseInfo,'----------------------'); // 打印课程信息
    if(!courseInfo){ // 如果课程信息为空，抛出错误
        throw new Error('课程信息为空');
    }
    //prompt  模板    chatbot  知识库应用
    //用户的输入   问题？   私人chatbot
    //文件内容 放入 prompt
    //因为LLM token 比较大
    //LLM  学习
    // 基于这些内容  AIGC
    try{
        // prompt template     模板
        const prompt = `
        你是一个课程助手，请根据以下课程信息回答问题：
        只回答课程信息相关的内容，如果问题与课程无关，
        请礼貌告知你只能回答与课程相关的问题。
        课程信息：${courseInfo}
        问题：${question}
      `

      const response = await openai.chat.completions.create({ // 调用 OpenAI API 进行聊天
        model: "gpt-3.5-turbo", 
        messages: [{
            //message 三种角色  1.系统角色 2.用户角色 3.助手角色
            //system user assistant
            role: "system", // 系统角色，指定助手的角色
            content: "你是一个课程助手，请根据课程信息回答问题："
        },
            {
             role: "user",
             content: prompt 
            }
        ], // 发送的消息，包含用户角色和问题内容
        temperature: 0, // 控制输出的随机性，0 - 1 之间，0 表示确定性输出，1 表示随机性输出
        max_tokens: 1000, // 控制输出的最大长度，单位为 token，最大为 1000
           })
           return response.choices[0].message.content; // 返回 API 响应中的回答内容
    }catch(error){
        console.log(error);
    }

}


const question = "哪个课程最适合前端学习，为什么"; // 定义问题
answerQuestion(question)
  .then(answer => {
    console.log(answer); // 打印回答结果
  })