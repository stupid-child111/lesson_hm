//大厂语法基础题
function sayHello(){
    //变量
    var name ="李华";
    return "Hello" + name;
    //拼接字符串
}
var age = 10;
if(age > 5){
    //es6新增的**let**变量声明 
    let dogYears = age * 7;
    console.log("You are"+dogYears+"years old in dog years")
}
console.log(sayHello())