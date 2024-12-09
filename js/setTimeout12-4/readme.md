# 定时器

- JS 是单线程  只有一个主线程
- setTimeout 异步执行的计时器     会在**主线程执行完后**再执行
   callback  函数 放入其他地方(event loop) 时间(ms)
- 一定会在指定时间执行吗？    
- 找回？
  执行的是回调函数
- 定时器ID(通过ID可以取消定时器)



- 如何用 setTimeout 实现 setInterval？
  setInterval 函数在 JavaScript 中用于设置一个重复执行的定时器。它会按照**指定的时间间隔（以毫秒为单位）不断地调用指定的函数或执行一段代码**，直到**被 clearInterval 函数清除**。
  - 场景编程题
  - 手写题  
    - customSetInterval    函数名
    - callback ，time   参数
    - 可以使用setTimeout 实现
    - 递归
    - 关闭

- call
  - 函数对象上的方法