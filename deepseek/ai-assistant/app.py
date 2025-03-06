# # 后端 http 伺服

# #request 相当于 axios  调用deepseek api
# #jsonify 接口json化
# from flask import Flask, request,jsonify,send_from_directory

# import openai 
# from dotenv import load_dotenv

# #挂载到系统环境变量之中
# import os

# load_dotenv()

# # 实例化 Flask app 对象
# #python 没有 new
# #超级变量(当前目录 主入口) 静态url路径  静态服务器==前端
# #传统后端
# #在static 目录下启动静态服务器 通过cdn  不需要路由 直接访问
# # / 直接指向 static
# app = Flask(__name__,static_url_path='',static_folder='static')

# # 装饰器模式  MVC(后端开发遵守) MVVM(前端开发遵守)
# #把server_index 装饰成路由的处理函数
# #路由 动态资源  router --> 获取数据 --> 渲染 index.html
# @app.route('/')
# def server_index():
#     # 文件系统 OS 
#     return send_from_directory('static','index.html')

# # restful驱动 网站设计的一个规范  一切皆资源 url + method
# # deepseek 路由接口
# #装饰器模式
# @app.route('/chat',methods=['POST'])
# def chat():
#     try:
#         #python声明变量、不用var  弱类型脚本
#         # request 请求对象中以json 解析请求体
#         #python 同步的 js 异步的
#         data = request.json
#         model = data.get('model')
#         messages = data.get('message')
#         #创造性
#         temperature = data.get('temperature', 1.0)

#         if not model or not messages:
#             return jsonify({'error': '缺少必要的字段'}), 400


#         api_key = os.getenv('OPENAI_API_KEY') 
#         base_url = os.getenv('DEEPSEEK_BASE_URL') 

#         # python 早于json
#         #字典中jsonify 进行转 json
#         if not api_key:
#             return jsonify({'error': 'OPENAI_API_KEY 未设置'}), 500

#         client  = openai.OpenAI(api_key=api_key,base_url=base_url)

#         # 同步
#         # js单线程 用户交互快快快
#         # node 异步后端编程 性能特别好 异步无阻塞 
#         response = client.chat.completions.create(
#             model=model,
#             messages=messages,
#             temperature=temperature,
#             #流式输出
#             stream=False
#         ) 
#         #m views(index.html) controller(现在写的)
#         #print(data)
#         return jsonify({'message': response.choices[0].message.content})
#     except openai.error.OpenAIError as e:
#     #简式类型转换
#         return jsonify({'error': str(e)}),500#deepseek 发生错误
#     except Exception as e:
#         return jsonify({'error':'发生了一个意外错误'}), 500

# #确保  只有在当前文件运行的时候才会执行
# if __name__ == '__main__':
#     app.run(debug=True)









from flask import Flask, request,jsonify,send_from_directory
import openai 
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__,static_url_path='',static_folder='static')

@app.route('/')
def server_index():
    # 文件系统 OS 
    return send_from_directory('static','index.html')


@app.route('/chat',methods=['POST'])
def chat():
    try:
        data = request.json
        model = data.get('model')
        messages = data.get('message')
        #创造性
        temperature = data.get('temperature', 1.0)

        if not model or not messages:
            return jsonify({'error': '缺少必要的字段'}), 400
        api_key = os.getenv('OPENAI_API_KEY') 
        base_url = os.getenv('DEEPSEEK_BASE_URL') 
        # python 早于json
        #字典中jsonify 进行转 json
        if not api_key:
            return jsonify({'error': 'OPENAI_API_KEY 未设置'}), 500
        client  = openai.OpenAI(api_key=api_key,base_url=base_url)
        # 同步
        # js单线程 用户交互快快快
        # node 异步后端编程 性能特别好 异步无阻塞 
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=temperature,
            #流式输出
            stream=False
        ) 
        #m views(index.html) controller(现在写的)
        #print(data)
        return jsonify({'message': response.choices[0].message.content})
    except openai.error.OpenAIError as e:
    #简式类型转换
        return jsonify({'error': str(e)}),500#deepseek 发生错误
    except Exception as e:
        return jsonify({'error':'发生了一个意外错误'}), 500
#确保  只有在当前文件运行的时候才会执行
if __name__ == '__main__':
    app.run(debug=True)
