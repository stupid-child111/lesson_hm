<script setup>
//import { ref } from 'vue';
import CompA from './components/CompA.vue';
import CompB from './components/CompB.vue';
import { useUserStore } from './store/user';
import { toRefs } from 'vue';

const userStore = useUserStore();

const { 
  isLogin,
  userInfo
} = toRefs(userStore);


const{
  toLogin,
  toLogout,
  setUserInfo 
} = userStore;

const login = () => {
  toLogin();
  setUserInfo();
}
//集中管理
// const count = ref(0);
// function increasement() {
//   count.value++;
//}
</script>

<template>
  <div>
    <div v-if="isLogin">
      <img :src="userInfo.avatar"/>
    </div>
    <div v-else>
      <button @click="login">登录</button>
    </div>
    <CompA />
    <CompB />
  </div>
</template>

<style scoped>

</style>