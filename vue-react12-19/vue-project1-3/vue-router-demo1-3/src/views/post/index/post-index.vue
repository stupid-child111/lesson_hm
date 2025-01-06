<template>
    <div>
        PostIndex
        {{sort}}
    </div>
</template>

<script setup>
import PostIndex from '../index/post-index.vue';
import { defineProps } from 'vue';
const props = defineProps({
    sort: String,
});
const { sort } = props;//提高可读性
// {{props.sort}}//不太好看
</script>

<style scoped>

</style>