//同一文件夹
import vnode from "./vnode";

// console.log(vnode('div',2,3,4,5))

//编写一个低配版的h函数，必须要有三个参数
//相当与重载功能较弱，不使用接受两个，或者一个参数的情况

// 11111 h('div',{},'text')
// 22222 h('div',{},[])
// 33333 h('div',{},h())
export default function(sel,data,c){
    //检查参数的个数
    if(arguments.length !== 3) 
    throw new Error('h函数必须传入三个参数,我是低配版h函数')
    //检查c的参数类型
    if(typeof c === 'string' || typeof c === 'number'){
        //说明现在是形态11111
        return vnode(sel,data,undefined,c,undefined);
    }else if(Array.isArray(c)/**形态22222 */){
        let children = [];
        //首先遍历c
    for(let i = 0;i < c.length;i++){
        if(!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))){
            throw new Error('传入的数组参数中有项不是h函数')
        }//else{
        //     return vnode(sel,data,c,undefined,undefined)
        // }
        //这里不需要执行c[i],index.js中的h函数【 h('p',{},'我是p标签1')】会执行
        //此时只需要收集
        children.push(c[i]);
    }
    //循环结束，说明children收集完毕，此时返回vnode
    return vnode(sel,data,children,undefined,undefined)
    }else if(typeof c === 'object' && c.hasOwnProperty('sel')/**形态33333 */){
        //传入的c是唯一的children，   不需要执行，测试语句中已经执行了【h('span',{},'我是span标签1')】
        let children = [c];
        return vnode(sel,data,children,undefined,undefined)
    }else{
        throw new Error('第三个参数类型不对')
    }
}