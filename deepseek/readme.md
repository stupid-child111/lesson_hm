## 春招执行方案

- 时间
  3月-5月
- 大厂
  - 语言能力
  - 面试能力
  - 算法
  - 3月-4月份 新手面试期
    - 年前vue项目模板
    - node +  全栈 + vue/react
    - leetcode 100+ dp 分治....
  - 5月 润  

## deepseek
  - 性价比高
  百万 tokens 计费 1￥
  tokens 提问以及返回 按token计费
  token 分词

  参照 gpt4 o1 百万 280￥
  - 为什么省
   - 最初 OpenAI 堆算力 使用GPU
   - 新的算法 可绕过 英伟达 cuda编程
   - deepseek V3 使用 2048块 H800 557.6万美刀 
     meta   llama3(facebook) 是deepseek的11倍
     openai 闭源
     llama3 开源
   - 英伟达 股价大跌
   - 用户多 --> 赚大钱 --> AI
## deepseek AI 全栈项目
   前端 + 后端 + LLM = AI fullstuck 
- ai应用集合项目
  coze 工作流 + ai 应用
  deepseek openai 的替代品 prompt
  langchain  RAG 引用开发

- 简单实现 react(chatbot)
- node koa
  负责向前端提供API调用
- LLM 请求(deepseek)  之前使用 302.ai 
  现在 **离线**大模型调用

  react -> koa -> LLM 再 LLM —> koa ->react 

- 大前端方向(**前后端分离**)
  - 前端包着后端
    ：5173
    前端项目初始化 react + js
    - 后端
    ：3000  **接受5173端口请求**
      npm init -y
     配置入口文件index.js
     npm i koa 后端框架
     - 创建实例koa
     - http服务 3000端口 处于伺服状态(随时处于服务状态，进行服务)
     - 路由 /chatai  message   (koa-router)
        - npm i koa (周边生态)
        - 实例化路由对象 new Router()
        - router.Method('/path', async(ctx) => {

        })注册路由
        - ctx 上下文响应对象 request + response
        - ctx.body 设置响应体
     后端路由 各种资源不同位置
  - 产生跨域问题 同源策略