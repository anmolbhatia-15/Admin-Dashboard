
import {dashboardData, ordersData, productsData, settingsData} from "../dummydata/dummy"
import {usersData} from "../dummydata/dummy"


const delay=(ms=500)=>{
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

const getDashboard=async()=>{
    await delay();
    return dashboardData
}
const getUser=async()=>{
    await delay()
    return usersData.items
}
const getProducts=async()=>{
    await delay()
    return productsData
}
const getOrder=async()=>{
    await delay()
    return ordersData
}
const getSetting=async()=>{
    await delay()
    return settingsData
}

export const api={
    getDashboard,
    getProducts,
    getUser,
    getOrder,
    getSetting
}