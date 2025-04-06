function hongbao(total,nums){
    const arr = [];
    let restAmount = total; // 剩余金额的初始化
    let restNums = nums; // 剩余个数的初始化
    for(let i = 0;i < nums - 1;i++){
       let amount = parseFloat(
        Math.random() * (restAmount / restNums * 2 - 0)
    ).toFixed(2); // 随机金额的计算
    restAmount -= amount; // 更新剩余金额
    arr.push(amount); // 将随机金额添加到结果数组中
    }
    arr.push(restAmount.toFixed(2)); // 将剩余金额添加到结果数组中
    return arr;
}
console.log(hongbao(25,6))