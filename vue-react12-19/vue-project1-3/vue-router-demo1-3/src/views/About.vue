<template>
    <div>
        About
        <button @click="goHome">回到首页</button>   
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router  = useRouter();//路由实例  总管
const goHome = () => {
    //js 跳转  BOM  API
    //window.location.href = '/';
    //破坏了浏览器的历史栈 
    router.push('/');//路由跳转
}
</script>

<style scoped>

</style>