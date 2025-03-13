import {
    createApp,
    h
} from 'vue';
//h 专门接受虚拟DOm 表达

//虚拟ODM 是现代前端框架的核心概念
// 它是一个轻量级的JavaScript对象   用以描述真实DOM的结构和属性。
const vnode = h('div',{id: 'app'},"Hello vue3")

createApp({
    //render 成为真实DOM
    render(){
        return vnode;
    }
}).mount('#app')