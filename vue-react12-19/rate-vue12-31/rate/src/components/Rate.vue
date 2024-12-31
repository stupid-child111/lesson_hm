<template>
    <div>
        {{ rate }}
        {{ count }}
        {{ props.value }}
        <!-- 都是数据项 -->
    </div>
</template>

<script setup>
import{ ref,defineProps,computed } from 'vue';
let count = ref(0)//组件自带的响应式数据  props 参数数据 外界传入
//ref 是自己的数据  props 是父组件传递过来的数据
//用于定义 props 业务  消费数据，不是自身的数据，而是和父组件绑定
//既然父组件主动传递 score 数据，那么为什么还需要需要定义 props ？？？
//子组件和父组件不一定是一直绑定的，不是自身的数据而是和父组件绑定
//通过定义一个 defineProps 告诉外界，需要一个什么类型的数据 

let props = defineProps({
    value: Number//类型
})

//计算属性 也是数据
let rate = computed(() => 
"★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
)
// let rate = computed(() => {
// "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
// })
</script>

<style scoped>

</style>