//动态规划(自底向上)(dp)
// - 得到达成某个目的的算法过程
// - 不关心具体的过程
//动态规划自底向上 解决问题 迭代
// - 适合用动态规划 最终值 最优解 dp
// - 先递归 找到最大值 子问题的关系 --> 状态转移方程 最优子结构
const climb = function(n){
    const f = [];//f[i] 最终结果
    f[1] = 1;
    f[2] = 2;
    //迭代
    for(let i = 3;i<=n;i++){
        f[i] = f[i-1]+f[i-2];
    }
    return f[n];
}
console.time('climb')
climb(10)
console.timeEnd('climb')