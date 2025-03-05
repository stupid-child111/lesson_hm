- vue3 响应式
  - ref  .value  响应式对象  代理value属性 Object.defineProperty 性能好
  - reactive  响应式代理 proxy  代理整个对象


- 父子组件通信
  - props  父组件向子组件传值
  - @chile-message="handleEvent" 自定义事件名称+处理函数  attrs
  - 子组件  一切由外界传的 都得声明一下
   emit 汇报
     emits = defineEmits(['chile-message'])
  - emit(event_name,params) 子组件向父组件传值