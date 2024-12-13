//ReferenceError: b is not defined
//进行 RHS 查询 没有b 报错
function foo(a){
    console.log(a + b);
    b = a;
}
foo(2);