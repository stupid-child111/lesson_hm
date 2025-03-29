import dayjs from "dayjs";
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
import SidebarNoteItemHeader from "@/components/SidebarNoteItemHeader";

export default function SidebarNoteItem({ noteId, note }) {
    // const { title, content = '', updateTime } = note;
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
            <SidebarNoteItemHeader title={title}  updateTime={updateTime}/>
            </SidebarNoteItemContent>
            )
}