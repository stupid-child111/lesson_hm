<template>
  <div>
    <!--内存泄漏-->
    <MousePosition v-if="showMouse" />
    <button @click="toggleMouse">切换显示</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MousePosition from './components/MousePosition.vue';
const showMouse = ref(true);
function toggleMouse() {
  showMouse.value = !showMouse.value;
}
</script>

<style scoped>

</style>