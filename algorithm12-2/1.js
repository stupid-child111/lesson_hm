//求X的n次方
function fun1(x,n){
    let result=1;
    for(let i=0;i<n;i++){
        result*=x;
    }
    return result;
}