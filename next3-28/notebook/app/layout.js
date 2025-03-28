import Sidebar from "@/components/Sidebar";
import './style.css'
export default async function RootLayout({
  children,
}){
  //异步变同步
  //请求数据  SEO
  //数据需要 await
  return (
    <html>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar />
            <section className="col note-viewer">
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  )
}