<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="sendMessageToParent">发送消息给父组件</button>
    </div>
</template>

<script setup>
import { 
    defineProps,
    defineEmits,
    ref
 } from 'vue';

const childMessage = ref('儿子来了')

defineProps({
    title:{
        type:String,
        required:true,
    }
})

//emits 汇报 触发
const emit = defineEmits(['child-message'])//多个自定义事件
const sendMessageToParent = () => {
    emit('child-message',childMessage.value)
}
</script>

<style scoped>

</style>