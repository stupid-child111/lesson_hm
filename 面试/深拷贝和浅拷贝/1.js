//浅拷贝
let a = 1;
let b = a;
a = 2;
console.log(a);
console.log(b);

//深拷贝  一层
let x = [1, 2, 3];
let y = [];
//学习展开运算符
y = [...x];
// for(let i = 0;i < x.length;i++){
//     y[i] = x[i];
// }
x = [111, 222, 333];
console.log(x);
console.log(y);


//深拷贝  多层
let m = [1, 2, 3, [4, 5,]];
//在堆内存  [1,2,3,0x1234] 第二层还是地址
//直接展开还是有问题

//1、使用JOSON   function不适用

let n = JSON.parse(JSON.stringify(m));
m[3][1] = 1000;
console.log(m);
console.log(n);


//2、如果是函数
//JSON 不能拷贝函数
let j = {
    name: 'zhangsan',
    age: 18,
    fn() {
        console.log(this.name);
    }
}
let k = JSON.parse(JSON.stringify(j));
console.log(j);
console.log(k);

//2、 函数  一层
let o = {
    name: 'zhangsan',
    age: 18,
    fn() {
        console.log(this.name);
    }
}
let p = { ...o };
o.fn = function () {
    console.log(this.age);
}
console.log(o);
console.log(p);
o.fn();
p.fn();


// 超级无敌NBplus版本

function deepClone(data) {
    //函数直接返回，因为函数返回后 会再内存中开辟一个空间
    //object  对象 数组 null
    if(typeof data === 'object' && data !== null){
        let res = Array.isArray(data)? [] : {};
        for(let j in data){
            if(data.hasOwnProperty(j)){
                res[j]  = deepClone(deta[j])
            }
        }
        return res;
    }else{
        return data;
    }
}

let object = {
    name: 'zhangsan',
    age: 18,
    fn() {
        console.log(this.name);
    },
    fn1: function () {
        console.log(this.age);
    },
}

let object2 = deepClone(object);
object.fn1 = function () {
    console.log(this.age + 10);
}
console.log(object);
console.log(object2);
object.fn1();
object2.fn1();