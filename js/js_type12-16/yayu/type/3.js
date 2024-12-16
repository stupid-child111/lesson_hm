console.log(1 / +0);//正无穷 Infinity
console.log(1 / -0);//负无穷 -Infinity
console.log(Object.is(5,5));
console.log(Object.is(+0,-0));
//隐式类型转换
console.log(2 * "a",2 + "a");
//null无法typeof
console.log(typeof(NaN))
console.log(typeof(NULL))
console.log(parseInt("123aaa"))
console.log(NaN === NaN)//不代表确切值
//不能通过===NaN 判断 所以使用 isNaN
console.log(isNaN(NaN),isNaN(parseInt("abc")))
