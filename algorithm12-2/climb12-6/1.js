const climb = function(n){
    if(n == 1){
        return 1;}
    if(n == 2){
        return 2;}
        return climb(n-1)+climb(n-2);
}
console.time('climb')
climb(10)
console.timeEnd('climb')