// 中央 状态管理  login useInfo
// count  中央所有

//定义一个仓库
import { defineStore } from 'pinia'
import { ref } from 'vue'

//仓库名    函数
export const useCounterStore = defineStore('counter', () => {
    const count  = ref(0);

    function increasement(){
        count.value++;
    }
    return{
        count,
        increasement,
    }
})