# js类型转换

- es6之前  js类型  6种
 - 简单数据类型 Primitive  **拷贝式赋值**
   - String Number Boolean Null Undefinded(**栈内存**) 
 - 复杂类型 引用式赋值
   - Object(**堆内存**)
- 为什么JS 类型改变
  - JS 是弱类型语言
  - 变量的类型 可改变
  - 搞清楚变量的确切类型
   - Primitive 类型-->其他类型的转换
   - Object 类型-->其他类型的转换

- Boolean 显示类型转换规则
  - false 
    +/-0 NaN '' null undefined

- +0 -0
  通过Object.is() 区分
  1/+0 1/-0 Infinity -Infinity

- NaN
  类型依旧为Number ,表示一个特殊的数字
  1.通过isNaN() 区分

- Number()
  0  1  NaN

  - 15.7.1.1 Number ( [ value ] ) # ①
Returns a Number value (not a Number object) computed by ToNumber(value) if value was supplied, else returns +0.


- String
  

  - 15.5.1.1 String ( [ value ] ) # ⚠

Returns a String value (not a String object) computed by ToString(value). If value is not supplied, the empty String "" is returned.
