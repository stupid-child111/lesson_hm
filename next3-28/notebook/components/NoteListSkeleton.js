//骨架屏
// 和最终结果相似  用户体验升级

export default function NoteListSkeleton() {
    return (
        <div>
            <ul className="notes-list skeleton-container">
                <li className="v-stack">
                    <div className="sidebar-note-list-item skeleton"
                         style={{height:'5em'}}  
                    />
                </li>
                <li className="v-stack">
                    <div className="sidebar-note-list-item skeleton"
                         style={{height:'5em'}}  
                    />
                </li>
                <li className="v-stack">
                    <div className="sidebar-note-list-item skeleton"
                         style={{height:'5em'}}  
                    />
                </li>
                {/* /模拟几个就行，效果到位 */}
            </ul>
        </div>  
    )

}