//  vue 中使用 jsx 语法
//react 认为的组件 State(响应式数据) +（UI [JSX表达]）
//react 一个组件就是一个函数 
import {
    defineComponent, // vue3 声明组件的函数 

} from 'vue'

export default defineComponent({
    name: "Hello JSX",
    props: {
        msg: String
    },
    setup(props){
        return () => (
            <div class="hello">
                <h1>{props.msg}</h1>
                <p>Welcome come to our Vite + Vue + Jsx Component</p>
            </div>
        )

    //或者
        // return () => {
            
        //     return (
        //         <div class="hello">
        //             <h1>{props.msg}</h1>
        //             <p>Welcome come to our Vite + Vue + Jsx Component</p>
        //         </div>)
        // }
    }

})