import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Topbar from "./topbar"
import { useState } from "react"



function Mainlayout() {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            <div className="min-h-screen bg-gray-100">

                {
                    showSidebar && (
                        <div className="fixed inset-0 z-40 bg-black/50 md:hidden"
                            onClick={() => setShowSidebar(false)}></div>
                    )
                }
                <Sidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
                <div className="md:ml-64 min-h-screen">
                    <Topbar
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    />


                <main className="p-8">
                    <Outlet />
                </main>
                </div>
            </div>
        </>
    )
}
export default Mainlayout