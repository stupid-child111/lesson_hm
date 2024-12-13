function foo(){
    b = 2;//先进行LHS 查询，没有b 进行默认声明变量
}

foo();
console.log(b);