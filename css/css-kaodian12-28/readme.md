## 层叠上下文

#  页面渲染规则

- 文档流
  body 开始从上到下，从左到右

- 布局  Layout


- 盒模型 盒子(本身大小)
  box-sizing border + padding + content
  盒模型 标准盒模型 content-box   宽高 = 内容宽度
  IE盒模型 border-box

- 认标签，但也可以转变 display
  块级元素 block
  行内元素 inline  不用于制作盒子  不能设置宽高  宽高由内容决定
    块级元素为何默认宽度100%？
    html 是第一个BFC 元素， body 参与html的BFC
      页面显示由html负责  完成页面布局  块级元素从上到下  行内元素从左到右


- display

- BFC (Block Formatting Context) 块级格式上下文
   - html 是根元素，也是最顶级的BFC
   - context 块级元素从上到下，行内元素从左到右


- 格式上下文​？ Formatting Context
  - 为何弹性布局 打破 html BFC 的规则
    - BFC 不是某个元素的特例。 弹性布局，创立了一个新的BFC
    - BFC 不受外界影响，全新的渲染区域 FFC Flex Formatting Context
      flex-direction: column|row;
  - GFC Grid Formatting Context    网格布局

  # BFC

  - html 最顶级的BFC
  - block level box 垂直方向 一个接一个的放置，且宽度为100%
  - 盒子垂直方向的距离由margin决定 同一个 BFC 的相邻盒子 margin 会重叠(想问为什么重叠，这就是最尽头的默认)
  - 每一个元素的margin 左边，与包含块 border 的左边相接触，即使存在浮动也是如此
  - BFC区域 不会与 float box 重叠
  - 独立渲染区域 不受外界影响
  - 计算BFC高度时 浮动元素也参与计算




  - 如果想解决重叠问题
  - 新建一个BFC
   - overflow(溢出): hidden|auto;  不为visible  