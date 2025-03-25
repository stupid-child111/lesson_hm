//主文件引入  
import h from './mysnabbdom/h'
const myVnode1 = h('div',{},'text')
console.log(myVnode1)
const myVnode2 = h('div',{},[
    h('p',{},'我是p标签1'),
    h('p',{},'我是p标签2'),
    h('p',{},[
        h('span',{},'我是span标签1'),
        h('span',{},'我是span标签2')
    ]),
])
console.log(myVnode2)
const myVnode3 = h('div',{},h('p',{},'我是p标签'))
console.log(myVnode3)
const myVnod4= h("ul", {}, [
    h("li", {}, "苹果"),
    h("li", {}, "香蕉"),
    h("li", {}, [
      h("div", {}, [
        h("p", {}, "我是一个p标签"),
        h("p", {}, "我是一个p标签")
      ])
    ])
]);
console.log(myVnod4)