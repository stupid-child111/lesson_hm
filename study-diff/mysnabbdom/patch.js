import vnode from "./vnode";
import createElement from "./creatElement";

export default function (oldVnode, newVnode) {
    //判断传入的第一个参数，是DOM节点还是虚拟节点
    if (oldVnode.sel === '' || oldVnode.sel === undefined) {
        //传入的第一个参数是DOM节点，此时要包装为虚拟节点
        //引入vnode
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
    }
    // console.log(oldVnode)

    //判断oldVnode和newVnode是不是同一个节点
    if (oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
        console.log('是同一个节点');
    }else {
        console.log('不是同一个节点,暴力插入新节点，删除旧节点');
         createElement(newVnode,oldVnode.elm);
    }
};