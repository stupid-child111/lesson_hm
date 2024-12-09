//递归
function fun2(x,n){
    if(n===0) {
        return 1;
    }
    //分解出子问题 
    return fun2(x,n-1)*x;
}           
