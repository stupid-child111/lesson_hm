import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h
  } from "snabbdom";

  //得到盒子和按钮
const container = document.getElementById('container');
const button = document.getElementById('btn');

  //2、创建 patch 函数
  const patch = init([
    // 通过传入模块初始化 patch 函数
    classModule, // 开启 classes 功能
    propsModule, // 支持传入 props
    styleModule, // 支持内联样式同时支持动画
    eventListenersModule // 添加事件监听
  ]);
  

const vnode1 = h('ul',{},[
    h('li',{},'A'),
    h('li',{},'B'),
    h('li',{},'C')
])

patch(container,vnode1)

const vnode2 = h('ul',{},[
    h('li',{key:"A"},'E'),
    h('li',{key:"B"},'A'),
    h('li',{key:"C"},'B'),
    h('li',{key:"D"},'C'),
]);

//点击按钮，更新视图  vnode1 -> vnode2
button.onclick = function(){
    patch(vnode1,vnode2)
};