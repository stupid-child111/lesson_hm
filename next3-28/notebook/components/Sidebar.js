import React from "react";
import Link from "next/link";
import { getAllNotes } from "@/lib/redis";
import SidebarNoteList from "@/components/SidebarNoteList";
export default async function Sidebar(){
    const notes = await getAllNotes()
    console.log(notes)
    return(
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
                 <strong>
                    React Notes 
                 </strong>
            </section>
            </Link>
            <section className="sidebar-menu">
                {/* SideSearchFiled */}
            </section>
            <nav>
                {/* SidebarNoteList */}
                <SidebarNoteList notes={notes}/>
            </nav>
        </section>
        </>
    )
}