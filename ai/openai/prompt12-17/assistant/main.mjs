import dotenv from 'dotenv';
import Openai from 'openai';//头文件引入声明写在最前面(防止重复)
//.env 导入本项目 环境变量配置文件
dotenv.config();//环境变量作用域属于进程对象
//全面使用es6
//全局环境对象
const { 
    OPENAI_API_KEY,
    OPENAI_BASE_URL
} = process.env

const client =new Openai({
    apiKey:OPENAI_API_KEY,
    baseURL:OPENAI_BASE_URL
})//.env 作用体现出来


//get_completion 函数封装
//async es7 函数
const get_completion = async(prompt,model = 'gpt-3.5-turbo') => {
    constmessages = [{
        role:'user',content:prompt
    }]

    const response = await client.chat.completions.create({
        model,
        messages,
        temperature:0,
    });
    return response.choices[0].message.content;
}

const main = () =>{
    
}
main()