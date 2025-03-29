'use client';//运行在客户端
import { useState,useRef,useEffect,useTransition } from "react";
import { useRouter,usePathname } from "next/navigation";// 集成了路由
//useState  响应式状态(返回数组)
//useRef  响应式状态(返回对象)  不会触发组件重新渲染  
//useEffect  副作用(函数)  组件渲染完成后执行  可以返回一个函数  组件卸载前执行
//useTransition 添加动画

//在前端运行
export default function SidebarNoteItemContent({
     id,
     title,
     children, 
     expandedChildren,
    }) {
        const router = useRouter();//路由对象
        const pathname = usePathname();//当前路径
        const selectedId = pathname?.split('/')[1] || null;
        const [isExpanded,setIsExpanded] = useState(false);
        const itemRef = useRef(null);
        const [isPending] = useTransition();//添加动画  过渡状态  布尔值  正在加载中
        const isActive = id === selectedId;
        useEffect(() => {
            // setInterval(() => {
            //     itemRef.current.classList.add('flash');
            // },2000)
        },[])
        // console.log(selectedId,'//////////////////////////')
        //默认列表页 没有去到详情页
        // 详情页 带上id
        //展开收起状态

        return (
            <div
            ref={itemRef} 
            //不是纯粹的DOM事件，而是React的事件，需要使用on开头
            onAnimationEnd={() => {
                itemRef.current.classList.remove('flash')    
            }}
            className={[
                'sidebar-note-list-item',
                isExpanded? 'note-expanded': ''
            ].join(' ')}>
                {children}
                <button 
                className="sidebar-note-open"
                style={{
                    backgroundColor: isPending
                    ?'var(--gray-80)'
                    :isActive
                    ?'var(--secondary-blue)':''
                }}
                onClick={() => {
                    router.push(`/note/${id}`) 
                }}
                >
                    Open note for preview
                </button>
                <button
                className="sidebar-note-toggle-expand"
                onClick={(e) => {
                    e.stopPropagation();//阻止冒泡
                    setIsExpanded(!isExpanded);
                }}
                >
                    {
                        isExpanded? (
                            <img src="/chevron-dowm.svg"
                            width="10px"
                            height="10px"
                            alt="Collapse"
                            />
                        ):(
                            <img src="/chevron-up.svg"
                            width="10px"
                            height="10px"
                            alt="Expand"
                            /> 
                        )
                    }
                </button>
            </div>
        )
}