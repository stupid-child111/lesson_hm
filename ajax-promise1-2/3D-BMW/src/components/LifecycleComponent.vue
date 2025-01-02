<template>
    <div>
        <p id="count">Lifecycle Component - Count:{{ count }}</p>
    </div>
</template>

<script setup>
import {
     defineProps,
     onMounted, 
     onBeforeMount, 
     onBeforeUnmount, 
     onUnmounted, 
     onBeforeUpdate, 
     onUpdated 
    } from 'vue'//都小写就报错
defineProps({
    count: {
        type: Number,
        required: true,
    }
})
// console.log('打印出来')
//组件的生命周期
onBeforeMount(() => {
    //before 某个阶段
    //mounted 组件挂载阶段
    //还没挂载完成
    console.log(document.getElementById('count'),'11111111111111111111111')
    console.log('组件挂载前')
})
onMounted(() => {
    //on 某个阶段
    //mounted 组件挂载阶段
    //已经完成挂载
    console.log('组件挂载完成')
    console.log(document.getElementById('count'),'2222222222222222222222222')

})
onBeforeUnmount(() => {
    //beforeUnmounted 组件卸载阶段
    console.log('组件卸载前')
})
onUnmounted(() => {
    //unmounted 组件卸载阶段
    console.log('组件卸载完成')
})
onBeforeUpdate(() => {
    //beforeUpdate 组件更新阶段
    console.log('组件更新前')
})
onUpdated(() => {
    //updated 组件更新阶段
    console.log('组件更新完成')
})
</script>

<style scoped>

</style>