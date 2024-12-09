const f = []; // 某层结果和数组下标一一对应
const climb = function(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    if (f[n] == 0) {
        f[n] = climb(n - 1) + climb(n - 2);
    }
    return f[n];
};
console.time('climb')
climb(10)
console.timeEnd('climb')