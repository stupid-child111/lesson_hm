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
        **表达：声明一个路由，用户以post方式向发送一个请求，koa以一个函数的形式服务于用户的请求**
        - ctx 上下文响应对象 request + response
        - ctx.body 设置响应体
     后端路由 各种资源不同位置
  - 产生跨域问题 同源策略


## ollama
  - 302.ai 转发 online 大模型
  - 本地访问大模型的可能
   ollama **pull** deepseek-r1:1.5b(参数大小) 拉取到本地  实现offline(离线) 调用
   模型的微调 基于业务需求，重新训练
   ollama pull llama3.2:latest  拉取到本地
   - const add = (x,y) => x + b 编程
     LLM(巨大的参数) nlp + 全球的知识(机器学习) + transformer 机制 => AIGC 回答 大模型 也是(解决许多问题的)大函数
   - ollama run deepseek-r1:1.5b 
     实现一个命令行(command line)chatbot
     目标：全栈应用方式进行通信
      - 11434 端口伺服
        - /api/chat 聊天的方式LLM响应
          /api/generate 生成的方式LLM响应
        - http 请求支持
   - 参数(处理问题的规模)尺寸
     内存 显卡 等硬件相关 
   - 实现 集成deepseek能力

   ### nodemon 插件

   npm i -g nodemon
   nodemon  文件
   监听我们的文件，实时修改更新

- koa
定义好路由，以函数形式处理来自于这个路由的用户,进行函数校验，逻辑功能，向LLM发送axios请求
然后返回资源，结束这次请求

    **表达：声明一个路由，用户以post方式向发送一个请求，koa以一个函数的形式服务于用户的请求**

- 基于koa， koa-router 通过 axios 向 ollama 11434/api/chat 发送请求，获得LLM 响应
- 封装AI LLM 接口


- react 通过axios 向 koa AI LLM 接口发送请求

## 跨域问题
  - jsonp 
    js中发送 ajax/fetch 受同源策略影响
    <script src=""></script>
    script 和 link 标签没有跨域限制

同源策略会限制其读取响应内容以防信息泄露。而CORS(跨源资源共享)机制允许服务器通过特定的
HTTP响应头告知浏览器该请求是被允许的,从而解除这种限制。
因此,虽然同源策略会限制JavaScript读取跨域请求的响应,但不会直接“block”请求本身;相反,它控制的是能否访问请求
是能否访问请求的结果。


   - cors 后端方案

   服务器端设置响应头，告诉浏览器允许跨域访问S=
   ctx.set 上下文 响应 对象
   Access-Control-Allow-Origin
   Access-Control-Allow-Methods
   Access-Control-Allow-Headers

   - options 预检请求  method 之一
   跨域请求前，先发送一次options请求，询问服务器是否允许跨域
   允许后，继续发送实际的请求 post

   响应头 http 状态码    
   201 创建成功 created  
   200 OK
   204 No Content 允许 但是后续不返回内容
    if(ctx.method === 'OPTIONS'){
      ctx.status = 204;
      return;
    }


  

  - koa服务 
    - 中间件函数  洋葱模型
    - 从上到下顺序执行
    - 使用 next()保证依次执行
    前端刷新每次执行两次
    后端执行一次


    - vue 和 react 区别
     - vue v-model 双向绑定
     - react 单向数据流 认为双向绑定性能特别不好
       - 单向 + 事件 onChange
     - vue 支持事件修饰符 api 友好
     - react 手写