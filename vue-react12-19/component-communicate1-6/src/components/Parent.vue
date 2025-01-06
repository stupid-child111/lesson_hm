<template>
    <div>
        <Child ref="comp"/>
        <button @click="handlerClick">按钮</button>
    </div>
</template>

<script setup>
import { handleError } from 'vue';
import Child from './Child.vue'
import { ref } from 'vue';
const comp = ref(null);//标记 DOM 元素  null 组件没有挂载，DOM 也不在
const title = ref('来自父组件的消息')//标记数据
const handlerClick = () => {
    console.log(comp.value.childName);
    comp.value.someMethod();
    // console.log(title);
}
</script>

<style scoped>

</style>