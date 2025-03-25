//vnode 向外暴露参数
//传入的五个参数组合成对象返回
 export default function(sel,data,children,text,elm){
    return {
        sel:sel,data,children,text,elm
    };
 }