// export default[
//     {
//         url: '/api/login',
//         method: 'post',
//         timeout: 2000,
//         response: () => {
//             let body = requestAnimationFrame.body
//             console.log(body)
//             return {
//                 code: 200,
//             }
//         }
//     }
// ]
import pkg from 'jsonwebtoken';
const {sign} = pkg  //sign jwt 给的api
//密钥
const secret ='xmy666'

export default [
    {
      url: '/api/login',
      method: 'post',
      timeout: 2000,
      response: (req, res) => {
        let body = req.body
        // console.log(body)
        if (body.username !== 'admin' || body.password !== '123456') {
          return {
            code: 60204,
            message: '账号或者密码错误，请重新输入'
          }
        }

        //签发令牌 token
        const token = sign({user: body.name}, secret,{expiresIn: 60})
        return {
          code: 200,
          data: token
        }
      }
    }
  ]