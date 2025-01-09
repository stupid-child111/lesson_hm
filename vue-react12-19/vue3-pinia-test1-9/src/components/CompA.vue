<template>
    <div>
        <h2>CompA</h2>
        <p>count:{{ counterStore.count }}</p>
        <button @click="counterStore.increasement">增加</button>
        <CompSubA />
    </div>
</template>

<script setup>
import CompSubA from './CompSubA.vue';
//引入中央模块
import { useCounterStore } from '../store/counter';

const counterStore = useCounterStore();
// console.log(counterStore);
// const { count, increasement } = counterStore;


// import { 
//     defineProps,
//     defineEmits
//  } from 'vue';

//  import CompSubA from './CompSubA.vue';

// const emits = defineEmits(['add']);
// const props = defineProps({
//     count: {
//         type: Number,
//         required: true
//     }
// })

// function addCount() {
//     emits('add');
// }
</script>

<style scoped>

</style>