//真正创建节点,将vnode创建为DOM，插入到pivot元素之前
export default function (vnode, pivot) {
    console.log('目的是把', vnode, '插入到', pivot, '之前')
    //创建一个DOM节点，该节点现在还是孤儿节点
    let domNode = document.createElement(vnode.sel);
    //判断是文本还是有子节点 
    // <ul>
    //     adafassgg
    //     <li></li>
    // </ul>
    if (vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)) {
        //内部是文字
        domNode.innerText = vnode.text;
        //将孤儿节点上树
        //让标杆节点的父元素调用insertBefore方法，将新节点插入到标杆节点之前
        pivot.parentNode.insertBefore(domNode, pivot);
        // document.insertBefore(domNode, pivot);
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {

    }
};