# Symbol

- 唯一值
  - 用symbol 函数来声明
  - 给一个 label 可选
  - 返回值唯一值
  - 常用于对象字面量  不需要担心覆盖
    key的用法 这也是Symbol 需要的原因
    大厂大型项目，对象复杂 难维护  多人协作


  - Obiect.keys()  获取对象的键名数组
  - Object.values() 获取对象的键值数组
  - Obiect.entries() 获取对象的键值对数组 不包括Symbol类型的键值对

- 可支持迭代
  通过Object.getOwnPropertyDescriptors(calssmates) 获取对象的属性描述符
  - 虽然 symbols emumberable 属性为true，但任不可枚举
    因为 Symbols 独特设计 就是提供唯一值 只能通过
    getOwnPropertySymbols来获取

- ownProperty？    