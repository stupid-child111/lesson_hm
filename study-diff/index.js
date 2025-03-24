import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h
  } from "snabbdom";
  

  //2、创建 patch 函数
  const patch = init([
    // 通过传入模块初始化 patch 函数
    classModule, // 开启 classes 功能
    propsModule, // 支持传入 props
    styleModule, // 支持内联样式同时支持动画
    eventListenersModule // 添加事件监听
  ]);
  
  //1、创建虚拟节点   不会真正展示在页面上
  const myVnode1 = h("a", 
    { props: { 
        href: "http://www.baidu.com" ,
        //链接指向的页面会在一个新的浏览器窗口或者新的标签页中打开
        target: "_blank"
    } },
     "百度");
//   console.log(myVnode1);

const myVnode2 = h("div",{}, "我是一个盒子");

const myVnode3 = h("ul", {}, [
    h("li", {}, "苹果"),
    h("li", {}, "香蕉"),
    h("li", {}, "西瓜")
]);

  //3、将虚拟节点转换为真实节点  渲染到DOM树，展示到页面上
  const container = document.getElementById("container");
  //一个容器只能让一个节点显示
    patch(container, myVnode3);