import { useEffect, useState } from "react"
import { api } from "../services/api"
import { ListOrdered, User, UserCheck, Users2 } from "lucide-react"

const Dashboard=()=>{
    const [dashboardData,setDashboardData]=useState(null)
    const[loading,setLoading]=useState(false)
    const loadDashboardData=async()=>{
        setLoading(true)

        try {
            const data=await api.getDashboard()
            setDashboardData(data)
        }catch(error){
            console.error("dashboard loading failed :",error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        loadDashboardData()
    },[])

    if(loading && !dashboardData){
        return(
            <div className="flex items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-gray-200 
                border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        )
    }
    if(!dashboardData){
        return(
            <div className="p-6 bg-white rounded-xl border border-gray-200 ">
                <div>
                    <p>DashBoard data is not available</p>
                </div>
            </div>
        )
    }
    const statsItems=[
        {
            label:"Total Users",
            value:dashboardData.stats.totalUsers.toLocaleString(),
            icon:Users2
        },
        {
            label:"Active Users",
            value:dashboardData.stats.activeUsers.toLocaleString(),
            icon:UserCheck
        },
        {
            label:"Total Revenue",
            value:dashboardData.stats.totalOrders.toLocaleString(),
            icon:ListOrdered
        },{
            lable:"Total Revenue",
            value:`₹ ${dashboardData.stats.revenue.toLocaleString()}`,
            icon:User

        }

        
    ]
    return(
        <>
        <div >
            <div className="grid grid-cols-1 
            sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {statsItems.map((item,idx)=>(
                    <div key={idx} className="bg-white border border-gray-200 
                    rounded-xl p-6 flex items-center justify-between
                    ">
                        <div className="space-y-2">
                            <p>{item.label}</p>
                            <p>{item.value}</p>
                        </div>
                        <div>
                            <item.icon/>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 
            gap-6">
                <div className="col-span-2  h-70 bg-white 
                border-gray-300 rounded-xl mt-8 p-6
                "><p className="text-sm font-light uppercase">Revenue Overview</p></div>

                <div className="col-span-1 bg-white  border-gray-300 rounded-xl mt-8 p-6">
                    <p className="text-sm font-light uppercase">Recent Order</p>

                    <div className="h-50 overflow-y-scroll">
                        {dashboardData.recentOrders.map((order,idx)=>(
                            <div key={idx} className="flex items-center justify-between py-2
                            border-b border-gray-100 pr-2
                            "><div>
                                <p className="text-sm font-light text-text-primary">{order.customer}</p>
                                <p className="text-xs font-light flex gap-2">
                                    <span>₹{order.amount}</span>
                                    <span>{order.date}</span>
                                </p>
                            </div>
                            <span className={`text-[10px] px-2 py-1 rounded-full bg-gray-100 ${
                                order.status==="Completed"?"bg-green-100 text-green-500":
                                order.status==="Pending"?"bg-orange-100 text-orange-400":
                                "bg-blue-100 text-blue-400"
                            }`}>
                            {order.status}
                            </span>


                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        
        </>
    )
}
export default Dashboard