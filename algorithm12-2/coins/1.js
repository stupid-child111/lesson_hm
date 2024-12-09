const coinChange = function(coins, amount) {
    const f=[];//每个值的时侯最少的硬币数 存放内部最优子结构
    f[0] = 0;
    for(let i = 1;i <= amount;i++){
        f[i] = Infinity;
        for(let j = 0;j < coins.length;j++){
            if(i - coins[j] >= 0){
                f[i] = Math.min(f[i],f[i-coins[j]]+1);
            }
            if([amount] == Infinity){
                return -1;
            }
        }
    }
    return f[amount];
};

console.log(coinChange([1,2,5],99))