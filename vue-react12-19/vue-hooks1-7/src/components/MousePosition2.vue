<!--封装成一个组件，组件化思维，提升业务能力-->
<script setup>
import {
  //composition  API vue3 亮点
   reactive,
   onUnmounted,
   onMounted, // 生命周期钩 life cycle
  } from 'vue';
// const x  = ref(0);
// const y  = ref(0);
const mousePosition = reactive({
  x: 0,
  y: 0  
})

const mousePositionHandler = (e) => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
}

onMounted(() => {
  window.addEventListener('mousemove',mousePositionHandler)  
})

onUnmounted(() => {
  window.removeEventListener('mousemove',mousePositionHandler);
})


</script>

<template>
  <div>
    <p>Mouse X:{{ mousePosition.x }}</p>
    <p>Mouse Y:{{ mousePosition.y }}</p>
  </div>
</template>

<style scoped>
</style>