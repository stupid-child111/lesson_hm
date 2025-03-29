import React, { Suspense } from "react";
import Link from "next/link";
import { getAllNotes } from "@/lib/redis";
import SidebarNoteList from "@/components/SidebarNoteList";
import EditButton from "@/components/EditButton";
import NoteListSkeleton from "@/components/NoteListSkeleton";
export default async function Sidebar() {
    // const sleep = (ms) => {
    //     return new Promise(r => setTimeout(r,ms))
    // }
    // await sleep(5000)
    //在SSidebarNoteList组件中加载
    const notes = await getAllNotes()
    console.log(notes)
    return (
        <>
            {/* 侧边拦 */}
            <section className="col sidebar">
                <Link href="/" className="link--unstyled">
                    <section className="sidebar--header">
                <img 
                 className="logo" 
                 src="/logo.svg"//放在静态服务器
                 width="20px"
                 alt="logo"
                 role="presentation"
                 />
                 <strong>React Notes</strong>
            </section>
                </Link>
                <section className="sidebar-menu">
                    {/* SideSearchFiled */}
                    <EditButton noteId={null}>New</EditButton>
                </section>
                <nav>
                    {/* SidebarNoteList */}
                    <Suspense fallback={<NoteListSkeleton />}>
                        {/* 通过手写sleep函数，使效果显现出来 */}
                        <SidebarNoteList notes={notes} />
                    </Suspense>
                    {/* <SidebarNoteList notes={notes}/> */}
                </nav>
            </section>
        </>
    )
}