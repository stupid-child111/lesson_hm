import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
//后端 和前端分离，分别安装
import axios from 'axios';

const chatApi = async (message) => {
  //请求行 message + url + http 版本
  //5173 -->3000 产生跨域  jsonp cors 
  const res = await axios.post('http://localhost:3000/chatai',
    //请求体 post put patch delete 通常具有
    message, {
    //请求头
    headers: {
      //规范请求体为json格式
      'Content-Type': 'application/json'
    }
  }
  )
  return res.data;
}

//hooks 函数 react 内置
//useState：数据变成状态
//useEffect 副作用
const App = () => {
  //input  question react 全面hooks
  const [question, setQuestion] = useState('');
  // LLM 聊天history
  const [conversation, setConversation] = useState([]);
  //加载状态
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   //副作用 相当于 mounted 
  // },[])
  //useEffect 不能直接使用 async await 
  useEffect(() => {

    //使用本地存储
    const storedConversation = localStorage.getItem('conversation');
    if (storedConversation) {
      setConversation(JSON.parse(storedConversation));
    }
    //副作用 相当于 mounted updated unmounted 
    //await chatapi()

    // const useChatAPI = async() => {
    //   await chatApi({message:'hello'})
    // }
    // useChatAPI()
  }, [])  //第二个参数  依赖项


  //函数里面再放函数，发生闭包
  const askQuestion = async () => {
    //参数校验 减少没必要的请求
    if (!question.trim()) {
      return;
    }

    // setConversation([

    // ])
    //高级语法，函数式更新
    setConversation((preConversation) => {
      return [
        ...preConversation, {
          question: question,
          answer: '等待回答...'
        }
      ]

    })

    // setConversation((preConversation) => 
    //   [
    //     ...preConversation, 
    //     { question: question, answer: '等待回答...' }
    //   ]
    // )

    setLoading(true);
    //保持程序健壮性
    try {
      const message = `你是一个聪明的机器人，我想知道${question}`;
      const response = await chatApi({ message });
      // console.log(response);
      setConversation((preConversation) => {
        preConversation[preConversation.length - 1].answer = response
        localStorage.setItem('conversation',JSON.stringify(preConversation))
      //返回一个全新的数组，和之前不一样的对象   独立状态
        return [
        ...preConversation
        ]
      })

      

    } catch (error) {
      console.warn('发生错误');
    }  finally {
      //一定最后执行
      setLoading(false);
      setQuestion('');
    }
  }


  return (
    <div className='chat-container' style={{ position: 'relative' }}>
      <p className='chat-title'>我是ollama + deepseek 本地大模型</p>
      {
        conversation.map((item, index) => (
          <div key={index} className='chat-message'>
            <div className="chat-question">
              <span className="el-tag el0tag--large">me:</span>{item.question}
            </div>
            <div className="chat-answer">
              <span className="el-tag el-tag--large">ai:</span>{item.answer.content}
            </div>
          </div>
        ))
      }
      <div className="chat-input">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          //vue @kwyUp.enter ={askQuestion}
          onKeyUp={(e) => e.key === 'Enter' && askQuestion()}//用户体验优化
          style={{ width: '80%' }}
        />
        <button onClick={askQuestion}>提交</button>
      </div>
      {loading && (
        <div className="loading-container">
          <p>请稍后，加载中...</p>
        </div>
      )}
    </div>
  )
}

export default App