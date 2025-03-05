<template>
    <div>
        关于
    </div>
</template>

<script setup>
// console.log('about');
import { onMounted } from 'vue'
import { getUserInfo } from '../api/'

onMounted(() => {
    //本地token 在http 请求中带上
    const getUserInfoCb = async () => {
        const res = await getUserInfo()
        console.log(res);
    }
    getUserInfoCb()
})

</script>

<style scoped>
</style>