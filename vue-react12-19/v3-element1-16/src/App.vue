<script setup>
import { ref, reactive } from 'vue';
const formRef = ref(null);
//收集表单数据
const form = reactive({
  username: '',
  password: ''  
})
</script>

<template>
  <div>
    <router-view />
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
</style>
