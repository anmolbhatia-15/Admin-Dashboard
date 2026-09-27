import { useLocation, useNavigate } from "react-router-dom"
import { pageTitles } from "../config/navigation"
import { ChevronUp, LogOut, Menu, Settings, User } from "lucide-react"
import { useState } from "react"
import Setting from "../pages/settings"

const Topbar = ({ showSidebar, setShowSidebar }) => {
    const navigate = useNavigate()
    const loaction = useLocation()
    const [isOpen, setisOpen] = useState(false)
    const pageTitle = pageTitles[loaction.pathname] || "Dashboard"
    return (
        <>
            <div className="sticky top-0 z-40 flex h-18 items-center justify-between border-b border-slate-300
        bg-white px-8 shadow-sm">

                <div className="flex items-center gap-4">
                    <Menu onClick={() => setShowSidebar(!showSidebar)} />
                    <h1 className="text-xl font-light text-gray-900">{pageTitle}</h1>
                </div>

                <div className="relative">
                    <button onClick={() => setisOpen(!isOpen)} className="flex items-center justify-center gap-4
             cursor-pointer transition">
                        <div className="w-9 h-9 bg-blue-800 text-white rounded-full flex items-center justify-center">AU</div>
                        <span>Admin User</span>
                        <span className="text-gray-600">
                            {isOpen ? <ChevronUp size={20} /> : <ChevronUp size={20} />}
                        </span>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 top-14 w-70 overflow-hidden rounded-xl border
                border-slate-200 bg-white p-2 shadow-xl
                ">
                            <div className="flex items-center px-3 py-4 gap-2 border-b border-gray-200">
                                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center
                        text-white shrink-0
                        ">AU</div>
                                <div>
                                    <p className="text-sm text-text-primary font-medium">Admin User</p>
                                    <p className="text-xs text-gray-500">admin@gmail.com</p>

                                </div>
                            </div>
                            <div className="border-b border-gray-200 space-y-2 py-2">
                                <button onClick={()=>{setisOpen(false); navigate("/profile")}}
                                className="w-full flex items-center gap-4 px-3 py1.5 rounded hover:bg-gray-50
                                cursor-pointer">
                                    <User size={18} />
                                    <span >Profile</span>
                                </button>
                                <button onClick={()=>{setisOpen(false); navigate("/settings")}}
                                 className="w-full flex items-center gap-4 px-3 py1.5 rounded hover:bg-gray-50
                                cursor-pointer">
                                    <Settings size={18} />
                                    <span>Settings</span>
                                </button>
                            </div>
                            <button onClick={()=>{alert("Layout comming")}}
                              className="w-full flex items-center gap-4 px-3 py1.5 rounded hover:bg-gray-50
                                cursor-pointer">
                                <LogOut size={18} />
                                <span className="text-md text-text-primary font-light">LogOut</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Topbar