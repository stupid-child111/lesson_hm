import { useState } from 'react'
import './repos.css'
function Repos() {
    // const repos = [
    //   {
    //     id: 1,
    //     name: "lesson_hm"
    //   },
    //   {
    //     id: 2,
    //     name: "algo-hello"
    //   },
    //   {
    //     id: 3,
    //     name: "prompt"
    //   }
    // ]


    
    const [repos,setRopos] = useState([])
    //使用一个响应式数据状态
    //返回数组  解构，数组的第一项是当前的状态，数组第二项是修改状态的方法
    const [loading,setLoading] = useState(true);
    fetch('https://api.github.com/users/stupid-child111/repos')
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      setLoading(false);
      setRopos(data)
    })
    //return的内容 = vue <template>
    return (
      //html？  react 发明 JSX 语法s
      //可以在js中写html
      //class 是关键字
        <div className="github-repos">
          <h2>Github Repositories</h2>
          {loading && <p>加载中，佬请等待...</p>}
      <ul>
      {
        repos.map(repo => (
          <li key={repo.id}><a href={repo.html_url}>{repo.name}</a>
          <span>作者：{repo.owner.login}</span>
          </li>
        ))
      }
      </ul>
      {!loading && repos.length === 0 && <p>没有仓库</p>}
      </div>
    )
  }
  
  export default Repos