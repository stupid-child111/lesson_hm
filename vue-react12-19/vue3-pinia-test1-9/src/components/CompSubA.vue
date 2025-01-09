<template>
    <div>
        CompSubA:
        {{count}}<!--通过解构使用-->
        <hr>
        {{ counterStore.count }}<!--直接用-->
    </div>
</template>

<script setup>
import { toRefs } from 'vue';//重新获得响应式

import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();//本地和中央连接的过程
const { count } = toRefs(counterStore);//只获得count值，响应式丢失
</script>

<style scoped>

</style>