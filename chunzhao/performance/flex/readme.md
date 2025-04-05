# 场景题
 有一个页面，有八个元素，使用了flex布局，请计算性能指标的渲染总时间和第一个元素渲染完的时间。

- 页面显示流程
  DOM + CSSOM = RenderTree + Layout + 图层(z-index   transform 重绘)

  script尾部执行
  做一个事件监听

  event
  js主线程 ---> 微任务渲染 ---> 计算事件 