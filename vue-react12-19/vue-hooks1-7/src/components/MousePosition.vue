<template>
    <div>
    <p>Mouse X: {{ x }}</p>
    <p>Mouse Y: {{ y }}</p>
  </div>
</template>

<script setup>
import { useMouse, useMemo } from '../hooks/useMouse';
import Hook from '../hooks/useMouse';

useMemo();

console.log(Hook);

const { x, y } = useMouse();
</script>

<style scoped>

</style>