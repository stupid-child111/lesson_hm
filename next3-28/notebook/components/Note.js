import EditButton from "@/components/EditButton"
import dayjs from "dayjs";
import NotePreview from "@/components/NotePreview";

//异步在上一级发生，该级只需要负责渲染就好
export default function Note({ noteId, note }) {
    const {title, content, updataTime} = note
    return (
        <div className="note">
            <div className="note-header">
                <h1 className="note-title">
                    {title}
                </h1>
                <div className="note-menu">
                    <small className="note-updated-at">
                        Last updated at:{
                        dayjs(updataTime).format('YYYY-MM-DD hh:mm:ss')
                        }
                    </small>
                    <EditButton note={noteId}>Edit</EditButton>
                </div>
            </div>
            <NotePreview>
                {content}
            </NotePreview>
        </div>
    )
}   