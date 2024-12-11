# 星球大战

- <!DOCTYPE html>
   版本声明   html5文档

- <html lang="en">
  语言声明   英文

- <meta name="viewport" content="width=device-width, initial-scale=1.0">
  视口声明   视口宽度等于设备宽度，初始缩放比例为1.0

- *
 css 通配符 针对所有元素
 margin padding 外边距 内边距设置为0 统一初始化**所有元素**
 由于不同浏览器有差别，默认值不同
 所以在页面开始前，进行样式reset
 但是 * 性能不太好 宁愿列出所有标签
   - reset

- 居中

  - 绝对定位 position：absolute；
    - 百分比相对于父元素
  - transform 变基移动；
    - 百分比相对于自身

  - 背景大法
    盒子在页面的占位会显现出来


- css 动画
  - animation
  - keysframe
  - transform scale translateY
  - 飞船模拟动画 逼真
  - 1% 时间差 画龙点睛
  - transform-style: preserve-3d;//支持3D
    perspective:800px;//视距 眼睛距离屏幕的距离

  
  - inline 元素不支持 transform ，display 属性 切换为inline-block