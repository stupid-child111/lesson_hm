![](https://static001.geekbang.org/resource/image/0e/39/0e922d413eeeac4378233baa254dd039.png?wh=1406x544)/

- 页面的Layout 和 设计稿
- 组件树
- 页面由组件构成，组件是开发的基本单位
  - 组件设计 最重要
  - 组件可复用性 随意组合 提高开发效率

- Vue 为组件设计提供了那些聚焦业务开发的API
  - style scoped
    - 不会污染全局(组件数过多时)
    - 使用后 在当前组件生成一个随机数，属性选择器
    - 写的代码，会添加这个属性选择器





   /* 块级元素默认得到宽度100%继承父元素的宽度 */
   AppMain -->Item

   scoped