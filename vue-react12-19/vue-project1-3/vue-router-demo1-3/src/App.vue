<script setup>
const name = "字节跳动"//数据
</script>

<template>
  <!--导航页-->
  <div class="page">

    <header class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <!-- 存放导航页 -->
      <nav class="menu">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/posts">内容</router-link>
      </nav>
    </header>
    <main class="page-body">
      <router-view />
    </main>

  </div>
</template>

<style scoped>

</style>