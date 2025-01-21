<script setup>
import { 
  ref,
  watch,
  watchEffect
 } from 'vue';
import deepWatchExample from './components/deepWatchExample.vue';
import BaseCard from './components/baseCard.vue';
import Layout from './components/layout.vue';

//单纯的计数器添加新功能
const count = ref(0);
function increase() {
  count.value++;
}
const num = ref(0);
function increaseNum() {
  num.value++;
}

//watch 监听数据状态
watch(count, (newValue,oldValue) => {
  //state状态的改变
  // console.log('count变化了', newValue, oldValue);
  if(newValue % 2 === 0) {
    console.log('count是偶数');
  } else {
    console.log('count是奇数');
  }
})


//订阅发布者模式
//effect 
watchEffect(() => {
  console.log(`当前count值为：${count.value + num.value}`);
})
</script>

<template>
  <div>
    <deepWatchExample/>
    <p>计数器：{{ count }}</p>
    <button @click="increase">增加</button>
    <p>计数器plus：{{ num }}</p>
    <button @click="increaseNum">增加</button>
    <BaseCard>
      <p>这里是默认插槽的内容，父组件以 slot 形式传入，增加组件的定制性</p>
      slot 插槽
      html 子元素
    </BaseCard>
    <Layout>
      <h1>默认slot</h1>

      <template #header>
        <h1>这里是头部内容，由父组件决定</h1>
      </template>
      <template #footer>
        <footer>这里是底部内容，由父组件决定</footer>
      </template>
    </Layout>
  </div>
</template>

<style scoped>

</style>