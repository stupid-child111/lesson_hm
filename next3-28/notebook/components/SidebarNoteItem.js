import dayjs from "dayjs";
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";

export default function SidebarNoteItem({ noteId, note }) {
    const { title, content = '', updateTime } = note;
    return (
        <SidebarNoteItemContent
            id={noteId}
            title={note.title}
            //折叠展开内容  显示
            expandedChildren={
                <p className="sidebar-note-expect">
                    {content.substring(0, 20) || <i>(No Comtent)</i>}
                </p>
            }
        >
            <header className="sidebar-note-header">
                <strong>{title}</strong>
                <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
            </header>
            </SidebarNoteItemContent>
            )
}