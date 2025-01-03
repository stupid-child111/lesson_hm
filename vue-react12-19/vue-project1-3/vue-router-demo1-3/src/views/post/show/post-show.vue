<template>
    <div>
        PostShow{{ postId }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()//当前路由
//console.log(route);
const { postId } = route.params//获取路由参数对象

</script>

<style scoped>

</style>