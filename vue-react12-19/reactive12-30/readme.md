# 响应式


{{count}}//响应式更新
let count = ref(0) //响应式对象
count.value++//数据修改

- getter setter


- 数据业务 value  count  --->  包装成响应式对象  ref --> 被拦截去更新依赖数据的地方
  - 声明数据(value,count)
  - 把数据作为对象的属性
  - es5 就拥有 Object.defineProperty(obj,proerty,{
    get,
    set
  })  在修改数据同时，顺便把 get set 寄存的相关时间给干了(比如更新DOM)

  - 每个属性都需要做一遍