import './App.css'
import React from 'react'
import { useState,useEffect } from 'react'
//后端 和前端分离，分别安装
import axios from 'axios';

const chatApi = async(message) => {
  //请求行 message + url + http 版本
  //5173 -->3000 产生跨域  jsonp cors 
  const res = await axios.post('http://localhost:3000/chatai',
    //请求体 post put patch delete 通常具有
    message,{
      //请求头
      headers: {
        //规范请求体为json格式
        'Content-Type':'application/json'
      }
    }
  )
  return res.data;
}

//hooks 函数 react 内置
//useState：数据变成状态
//useEffect 副作用
const App = () => {
  // useEffect(() => {
  //   //副作用 相当于 mounted 
  // },[])
  //useEffect 不能直接使用 async await 
  useEffect(() => {
    //副作用 相当于 mounted updated unmounted 
    //await chatapi()

    const useChatAPI = async() => {
      await chatApi({message:'hello'})
    }
    useChatAPI()
  })  

  return (
    <div>
      App
    </div>
  )
}

export default App