//管理全局共享的用户状态
import { defineStore } from 'pinia'
import {
    ref,
    reactive
} from 'vue'

export const useUserStore = defineStore("user", () => {
    const isLogin = ref(false);
    const toLogin = () => {
        isLogin.value = true;
    }
    const toLogout  = () => {
        isLogin.value = false;
    }


    const userInfo = reactive({
        name:"",
        avatar:"",
        message: 0,
        uid: null
    })

    const setUserInfo = () => {
        userInfo.name = "再学一点就睡",
        userInfo.avatar = "https://p6-passport.byteacctimg.com/img/user-avatar/9eab62bc0c42de5fbcc284201a2e09c3~140x140.awebp",
        userInfo.message = 0,
        userInfo.uid = 671151992348125
    }

    return {
        isLogin,
        toLogin,
        toLogout,
        userInfo,
        setUserInfo
    }
})