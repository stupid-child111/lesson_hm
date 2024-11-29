# css 底层基础
 - 何为css？
  ``` css
     css  rules
     /*css规则*/
  h1{/* 选择器 - selector (不叫标签)*/
    color:red;/*声明 - declaration*/
    font-size:10px;/*声明 - declaration*/
    property:value;
  }
   ```
- css ？ 层叠样式表
  - html DOM 不能独立存在
  - css 选择 DOM 元素运用样式规则
  - css如何引入？
   - style  内联样式
   - link 外部样式表
   - 行内样式 <p style="color:blue;"></p>
   页面从上到下，从左到右渲染
   先下载样式 再解析DOM 应用样式
   dom + css = render tree（渲染树）（显示页面的数据结构）
   -->浏览器渲染引擎-->渲染得到页面


                    |   <body></body>        根节点
    render tree     |  main.container      容器节点
        |           |     <p></p>          段落节点
        |           |     文本内容          文本节点
        |
        |渲染引擎显示的页面


- 优先级 
  - 从小到大
  - 计算规则  *10
   标签 1   类名10   id 100    行内标签 1000   ！import 最大
  - 当选择器比较复杂的时候 优先级加法
    - .container ul li:nth-child(odd) 10+1+1+10=22
      一定选择最后的元素
  - css 选择器分为哪几类？
    - 基础选择器
      - 标签选择器
      - 类选择器
      - id选择器
      - 通配符选择器  * 性能不好
      - 组合选择器
        - 后代选择器  空格
        - 子元素选择器   >
        - 相邻兄弟选择器 +
        - 普通兄弟选择器 ~
    - 伪类选择器
        ::active  ::hover  ::selection......  可交互状态
    - 伪元素选择器
    - 属性选择器