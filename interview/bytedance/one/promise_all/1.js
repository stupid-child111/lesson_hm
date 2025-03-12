const weather = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve({temp:29,conditions: 'Sunny with Clouds'})
        reject('error')
    },1000)
})


console.time('time');
const tweets = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve('I like cake,BBQ is really now!')
        reject('BBQ 糊了')
    },3000)
})

//简单  并发  花费5s


//js 单线程 怎么并发
//多个异步任务，不在乎顺序的时候
//Promise all 返回多个responses    race返回值不是数组   在乎速度 response
Promise
//数组参数接收
  .any([weather,tweets])
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err)
  })
console.timeEnd('time');