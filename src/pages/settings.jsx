import { useEffect, useState } from "react"
import { api } from "../services/api"


function Settings(){
    const [setting,setSetting]=useState(null)
     const[loading,setLoading]=useState(false)

const[formData,setFormData]=useState({
    siteName:"",
    theme:"Light",
    Notification:true,
    Language:"English",
    timezone:"Asia/kolkata",
    twoFactor:false
})
const[saved,setSaved]=useState(false)

const handleChange=(e)=>{
const{name,value,type,checked}=e.target;
setFormData((prev)=>({
    ...prev,
    [name]:type==="checkbox" ?checked:value
}));
setSaved(false)
}

const handleSave=()=>{
    console.log("settings Save",formData);
    setSaved(true)
    setTimeout(()=>{
        setSaved(false)
    },3000)
}
const handleReset=()=>{
    if(setting){
        setFormData(setting)
    }
     setSaved(false)
}

                const loadsettingData=async()=>{
                    setLoading(true)
            
                    try {
                        const data=await api.getSetting()
                        setSetting(data)
                    }catch(error){
                        console.error("UserData loading failed :",error)
                    }finally{
                        setLoading(false)
                    }
                }
                useEffect(()=>{
                    loadsettingData()
                },[])
            
                if(loading && !setting){
                    return(
                        <div className="flex items-center justify-center h-64">
                            <div className="w-12 h-12 border-4 border-gray-200 
                            border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    )
                }
                if(!setting){
                    return(
                        <div className="p-6 bg-white rounded-xl border border-gray-200 ">
                            <div>
                                <p>settingData is not available</p>
                            </div>
                        </div>
                    )
                }
    return(
        <>
        <div className="space-y-6">

            <div className="text-xl font-medium text-slate-900">
                <h1>Settings</h1>
                <p className="text-sm text-gray-400 mt-1">Manage your application prefernces.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-base font-medium text-gray-800">General Settings</h1>
                    <p className="text-sm text-gray-400 mt-1">Configure basic application settings</p>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>

                        <input type="text" name="siteName" value={formData.siteName} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200
                        text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                        <label htmlFor="">Theme</label>
                        <select name="theme"
                        value={formData.theme}
                        onChange={handleChange}
                           className="w-full px-4 py-2.5 rounded-lg border border-gray-200
                        text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                         id="">

                            <option value="Light">Light</option>
                            <option value="Dark">Dark</option>
                            <option value="System">System</option>
                         </select>
                    </div>

                    <div className="block text-sm font-medium text-gray-700 mb-2">
                        <label htmlFor="">Language</label>
                        <select name="Language"
                        value={formData.Language}
                        onChange={handleChange}
                           className="w-full px-4 py-2.5 rounded-lg border border-gray-200
                        text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                         id="">

                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                       
                         </select>
                    </div>

                    <div className="block text-sm font-medium text-gray-700 mb-2">
                        <label htmlFor="">Timezone</label>
                        <select name="timezone"
                        value={formData.timezone}
                        onChange={handleChange}
                           className="w-full px-4 py-2.5 rounded-lg border border-gray-200
                        text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                         id="">

                            <option value="Delhi">Delhi</option>
                            <option value="NewYork">NewYork</option>
                            <option value="Dubai">Dubai</option> 
                       
                         </select>
                    </div>
                </div>

            </div>
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
<div className="p-6 border-b border-gray-200">
    <h3 className="text-base font-medium text-gray-700">Notification</h3>
    <p className="text-sm text-gray-400 mt-1">Control application notification</p>
</div>
<div className="p-6">
    <label htmlFor="" className="flex items-center justify-between gap-4 cursor-pointer">
        <div>
            <p className="text-sm font-medium text-gray-700">Email Notification</p>
            <p className="text-xs text-gray-400 mt-1">Receive important updates throught email</p>

            </div>
            <input type="checkbox"
             name="Notification" 
             checked={formData.Notification} 
             onChange={handleChange} 
            className="w-5 h-5 blue-600"
            />
    </label>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
<div className="p-6 border-b border-gray-200">
    <h3 className="text-base font-medium text-gray-700">Security</h3>
    <p className="text-sm text-gray-400 mt-1">Manage account security preferences.</p>
</div>
<div className="p-6">
    <label htmlFor="" className="flex items-center justify-between gap-4 cursor-pointer">
        <div>
            <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
            <p className="text-xs text-gray-400 mt-1">Add an additional layer of security.</p>

            </div>
            <input type="checkbox"
             name="twoFactor" 
             checked={formData.twoFactor} 
             onChange={handleChange} 
            className="w-5 h-5 blue-600"
            />
    </label>
</div>
</div>
<div className="bg-white border-gray-200 rounded-2xl shadow-sm p-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
            {saved &&(
                <p className="tetx-sm text-green-600">
                  ~ Settings saved successfully
                </p>
            )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button onClick={handleReset}
             className="px-5 py-2.5 rounded-lg border
            border-gray-200 text-s, text-gray-600 hover:bg-gray-50 transition
            ">Reset</button>

            <button onClick={handleSave} className="px-5 py-2.5 rounded-lg bg-linear-to-r
            from-indigo-500 to-purple-500 text-white text-sm shadow-sm hover:shadow-md transition
            ">Save Settings</button>
        </div>
    </div>

</div>
        </div>
        </>
    )
}
export default Settings