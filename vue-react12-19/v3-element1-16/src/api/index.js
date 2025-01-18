import request from './request.js'
//项目所有的向后端请求接口都在这里管理

//登录接口
// /api/login server 响应 apifox 测试接口
//前后端 全栈的解耦
export const login  = (body) => request.post('/api/login', body).then(res => {
 return res;
}) 