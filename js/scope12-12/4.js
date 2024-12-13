var a = 1;
var b = 4;
function foo(){
    //编译过程 完成声明 undefined
    console.log(a,b);

    var a = 2;
    //console.log(a);
    var a = 3;
    function bar(){
        return a + b;
    }
     //console.log(bar());

     //console.log(a,b);
}
foo();

function foo(a){
    var b = a;
    return a + b;
}
var c = foo(2);