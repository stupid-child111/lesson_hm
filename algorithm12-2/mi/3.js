//时间换空间   时间复杂度O(n)--O(log n)
function fun3(x,n){
    if(n===0) {
        return 1;
    }
    //
    let t = fun(x,Math.floor(n/2));
    if(n%2===0) {
        return t*t;
    }else {
        return t*t*x;
    }
}