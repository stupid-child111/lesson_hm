"use strict"
var x = 2;

var obj = {
    x:1,
    foo:function(){
        console.log(this);
        console.log(this.x);
    }
}
//函数体
var  foo/*拿到函数地址*/ = obj.foo
//相同点是：同一个函数在运行
//区别：被谁调用  调用位置不一样
//调用时候？ 调用方式不一样
//对象的方法被调用
var obj2 = {
    x:5,
    foo:foo
}
obj2.foo() 

obj.foo()  // 1
//普通函数被调用
foo();//  2 没有必要
