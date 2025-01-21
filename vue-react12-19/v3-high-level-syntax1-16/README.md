- vue3 高级语法

- watch & watchEffect
  - 监听数据变化 执行相关操作
  - 参数不同 
    watch 第一个参数 监听的数据(响应式数据或数组)
      第二个参数 回调函数 获取变化前后的值
    watchEffect  第一个参数 回调函数
      第三个参数 配置项 immediate 先执行回调函数 默认是false
      deep 深度
      watchEffect 自动先执行一次， 默认deep监听
    - 副作用 相关的响应式对象发生变化后会自动执行的副作用


    - v-model 还能进行数据类型的绑定
      v-model.number  只能输入数字 适合于表单


- slot 插槽
  - 插在组件中间位置
  - 提升组件的定制性
   props 外界  ref/reactive 内部    
   将组件一部分的UI 暴露出来 让父组件决定
   组件开关中间写的默认不会作为DOM树和组件树解析
   默认插槽和具名插槽