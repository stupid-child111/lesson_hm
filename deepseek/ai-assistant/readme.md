# AI Aaaistant 全栈项目

- 大前端全栈
- 以后端全栈为主
  - 设计模式(思想)
     大前端  前端 MVVM  model(数据状态  useState，ref/reactive
     ， api/axios 接口， pinia)  view 
     model 模型层 = 数据定义 + 数据存储 + 数据管理 + 数据请求
     view 视图层 = component 组件 从原子层面剥离(html js css)
     vm 视图模型层 数据绑定(模型层)  数据驱动界面(v-if/v-show/v-for)
     事件监听 

     产品设计线框图


     后端 MVC  根据数据库 mysql 表table 建立模型  叫做model
     model 数据库独立于后端的  数据模型文件 schema orm
     view 试图层 = 前端页面 index.html  about.html
     controller 控制器层

  - 并发数
  - 基础设施
  - DDos 肉鸡攻击  qps


## 后端全栈AI 项目
- python flask 框架  node koa
  app.py 单点入口
- 纯js
- deepseek 在线api

## 文章 + leetcode 

## 项目准备
- python 安装
Python 3.12.8
- 配置虚拟环境
  本地依赖  不受全局环境影响 不影响全局
  python -m venv ai-assistant
  项目下存在项目依赖包

- 安装依赖
  pip install flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/
  falsk flask koa 后端框架
  openai 已经成为 aigc LLM 的事实标准
  /completion /chat
  base_url 转入deepseek

  没有前后端分离(MVC开发框架)
    - 前端存放在 static 目录下
    - 通过路由 /  显示index.html

- 何为静态文件
  - js/css/img 前端FE
  - 启动一个静态服务器

- 状态码
  1XX 请求中...
  2XX 成功... 201 created  204 No Content
  3XX 重定向
  4XX 客户端错误
  5XX 服务器端错误

响应头里第一个数据包 浏览器 或者程序  通过状态码就知道怎么处理
状态码是程序逻辑的一部分

- env 文件