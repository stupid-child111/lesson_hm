
function App() {
  // jsx
  // js区域中 编写html
  let mytitle = <h1>Hello,world</h1>
  return (
    // <div>
    // {mytitle}   
    // </div>
    // JSX 最外层， 有且只有一个节点(根元素)
    //  enclosed tag <> </> 也可以
    // 使用 fragment 节点
    <div>
      <p>hello</p>
      <p>world</p>
    </div>
  )
}

export default App
