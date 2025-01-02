<script setup>
import { ref } from 'vue'
import LifecycleComponent from './components/LifecycleComponent.vue'
//数据包装成响应式对象（对象可变 .value属性）
//Object.defineProperty  以及  Proxy
const count = ref(0)

//option 选项式API--->组合式 Composition API
const showComponent = ref(true);
const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};
const width = ref(100);
// const change (() =>{
//   width.value += 10;
// })
const change = () => {
  width.value += 100;
};

const increasementCount = () => {
  count.value++;
};
</script>

<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <button @click="increasementCount">Increasement Count</button>
    <p>{{ count }}</p>
    <transition name="fade">
    <LifecycleComponent v-show="showComponent" :count="count" />
    </transition>
    <div class="box" :style="{width: width + 'px'}"></div>
    <button @click="change">click</button>
    <!--vue内置组件-->
    <transition name="fade">
      <h1 v-if="showComponent">你好你好你好，我的头发~ 是真的</h1>
    </transition>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.box{
  background-color: aqua;
  height: 100px;
  transition: width 1s ease-in-out 0.1s;
}
/* 定义淡入淡出的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在 Vue < 2.1.8 */ {
  opacity: 0;
}
</style>
