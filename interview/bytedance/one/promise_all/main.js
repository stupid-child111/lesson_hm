const fs = require('fs');
const res = [];

//多异步任务  公同步化方案
//1.回调地狱 可读性极具降低
// fs.readFile('./a.txt', (err, data) => {
//     //回调函数  最早异步监听解决方案
//     //返回 buffer 二进制数据格式
//     //稳定性和容错性地位高 error
//     if (err) {
//         console.log(err);
//         return;
//     }
//     // console.log(data.toString());
//     res.push(data.toString());
//     fs.readFile('./b.txt', (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         res.push(data.toString());
//         fs.readFile('./c.txt', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             res.push(data.toString());
//             console.log(res);
//         })
//     })
// })


// //es6  es6  es6提供promise，优于回调的异步解决方案
const readFilePromise = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) {
                reject(err);
                return;
            } else {
                resolve(data.toString())
            }
        })
    })
}

// readFilePromise('./a.txt')
//     .then((txt) => {
//         res.push(txt);
//         //必须return ！！！！！返回一个promise
//         return readFilePromise('./b.txt');
//     })
//     .then((txt2) => {
//         res.push(txt2);
//         return readFilePromise('./c.txt');
//     })
//     .then((txt3) => {
//         res.push(txt3);
//         // console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('finally',res);
//     })
//     //为空 先于 readFilePromise执行
//     console.log(res);


//async await  es8 es8 es8 es8

(async () => {
    const textA = await readFilePromise('./a.txt')
    res.push(textA)
    const textB = await readFilePromise('./b.txt')
    res.push(textB)
    const textC = await readFilePromise('./c.txt')
    res.push(textC)
    console.log(res);
})()