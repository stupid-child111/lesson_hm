## 虚拟DOM ？

- 虚拟DOM  是**真实DOM** 在内存中的轻量级副本
  - 内存之中的对象(描述真实DOM)
  - 新 | 旧 虚拟DOM diff patch
  - 一次性作用到DOM 更新中

- 以下DOM 片段的虚拟DOM 对象是？
  - 虚拟DOM 非常方便表达真实DOM
  - type props childre([]) + 递归概念构成
               children 为一个数组
  - 文本节点直接给文字就行

- 什么时候生成虚拟DOM
  template 编译 --> 生成 Vnode(组合成Vdom树) --> render --> 生成真实DOM
  响应式 update  数据状态发生改变  --> 如果没有虚拟DOM --> 重新生成DOM --> 整个替换(重绘，重排太大  )
  虚拟DOM  生成新的Virtual Node(VDOM)  内存中  比较新旧两棵DOM树(就是节点比较)
  **针对性 一次性** 收集所有修改  **patches**  打包给DOM  一次性更新


- ==> 为什么 v-for 需要 key  而不是 index
    增 删 改 移动
    如果是移动的话  ABCD -> DABC  A B --> B B   B C --> C C   C D --> D D

- Vue 中 h 函数用于创建虚拟 DOM 节点，接收标签名、属性和子节点等参数。


## diff 算法
两棵新 | 旧 DOM 树
patches 得到补丁[   ]
减小时间复杂度
- 暴力
  - 每个 VNode 都去比对O(n)
  - 每个 VNode 的属性对比o(n)
  - 每个 VNode 的children 对比O(n)  
  O(n^3)

- 只做同层比较
  - 每一层 VNode 都去比对O(1)
  - **type 改变**  就不再比较  O(n) --> O(1)
    div                div
      ul                 span
        li
        li
  - 属性的比较 O(n)
  O(n^3)  -> O(n)