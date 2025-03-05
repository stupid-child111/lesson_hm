// react xue http请求标配
// ./ ../ 相对路劲  查找
//  内置模块  node_modules / 安装的第三方package
import axios from 'axios';

//实例
const service = axios.create({
    baseURL: '/',  //基础路径
    timeout: 5000, //超时时间
})

//登录后，有好多接口都需要带上token
//sertvice
//看文档 使用AI

//fetch xhr 在axios 面前 弱爆了
//fetch/xhr 只是 js 向后端通信的功能
//axios 封装了 fetch/xhr， 为前端工程而来

//请求拦截器
service.interceptors.request.use((config) => {
    console.log(config, '拦截所有请求.......');
    let token = localStorage.getItem('token') || '';
    //请求头添加了 Authorization 字段
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})
export default service;