import { useEffect, useState } from "react"
import { api } from "../services/api"

function Order(){
    
         const [orderData,setOrderData]=useState(null)
            const[loading,setLoading]=useState(false)
            const loadOrderData=async()=>{
                setLoading(true)
        
                try {
                    const data=await api.getOrder()
                    setOrderData(data)
                }catch(error){
                    console.error("UserData loading failed :",error)
                }finally{
                    setLoading(false)
                }
            }
            useEffect(()=>{
                loadOrderData()
            },[])
        
            if(loading && !orderData){
                return(
                    <div className="flex items-center justify-center h-64">
                        <div className="w-12 h-12 border-4 border-gray-200 
                        border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                )
            }
            if(!orderData){
                return(
                    <div className="p-6 bg-white rounded-xl border border-gray-200 ">
                        <div>
                            <p>orderData is not available</p>
                        </div>
                    </div>
                )
            }
    return(
        <>
       <div className="bg-white border overflow-x-auto
        border-gray-100 
        rounded-2xl">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-200 text-xs">
                        <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">order Id</th>
                        <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">customer</th>
                        <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">total</th>
                        <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">Items</th>
                        <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider">status</th>
                        <th className="px-5 py-3.5 text-left font-light uppercase tracking-wider"> date</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.items.map((user)=>(
                        <tr key={user.id} className="border-b border-gray-100">
                            <td className="px-5 py-4 font-light text-sm text-left text-black">{user.orderId}</td>
                            <td className="px-5 py-4 font-light text-sm text-left text-black">{user.customer}</td>
                            <td className="px-5 py-4 font-light text-sm text-left text-black">{user.total}</td>
                            <td className="px-5 py-4 font-light text-sm text-left text-black">{user.items}</td>
                            <td className="px-5 py-4 font-light text-sm text-left text-black">{user.status}</td>
                            <td className="px-5 py-4 font-light text-sm text-left text-black">{user.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        </>
    )
}
export default Order