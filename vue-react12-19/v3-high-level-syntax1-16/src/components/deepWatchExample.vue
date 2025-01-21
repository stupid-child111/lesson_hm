<template>
    <div>
        {{ typeof user.age }}
      <p>姓名: {{ user.name }}</p>
      <input v-model="user.name" placeholder="输入姓名" />
      <p>年龄: {{ user.age }}</p>
      <input type="number" v-model.number="user.age" placeholder="输入年龄" />
    </div>
  </template>
  
  <script setup>
  import { reactive, watch, watchEffect } from 'vue';
  
  // 定义一个嵌套的对象作为响应式数据
  // ref 自动转化为 reactive
  const user = reactive({
    name: '张三',
    age: 25,
    //对象内部的对象发生改变 watch 无法监听到 使用 deep
    address: {
      province: '广东省',
      city: '深圳市'
    }
  });
  
  // 使用 watch 监听 user 对象的变化，并设置 deep 为 true
//   watch(user, (newVal, oldVal) => {
//     console.log('user 发生了变化');
//     console.log('新值:', newVal);
//     console.log('旧值:', oldVal);
//   }, {
//     deep: true,
//     immediate: true//立即执行
//   });


//默认时就会开始执行一次  不需要 配置 deep 就会进行深度监听
watchEffect(() => {
    // Object.prototype.toString()
    console.log(`user 发生了变化 ${JSON.stringify(user)}`);
})
  </script>