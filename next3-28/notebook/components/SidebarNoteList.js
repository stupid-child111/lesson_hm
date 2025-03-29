// "use client";
// import dayjs from "dayjs";
import SidebarNoteItem from "@/components/SidebarNoteItem";

export default async function NoteList({ notes }) {
    const arr = Object.entries(notes);
    if(arr.length === 0) {
        return <div className="note-empty">
            没有笔记
            {'no notes created yet!'}
            </div>
    }

    return(
        <ul className="notes-list">
            {
                arr.map(([noteId, note]) => {
                    const {title, updateTime}  = JSON.parse(note)
                    return (
                        <li key={noteId}>
                            <SidebarNoteItem noteId={noteId} note={JSON.parse(note)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}