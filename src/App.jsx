

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainlayout from './layout/mainlayout'
import Dashboard from './pages/dashboard'
import User from './pages/user'
import Products from './pages/product'
import Order from './pages/order'
import Profile from './pages/profile'
import Setting from './pages/settings'
import './index.css'
import Settings from './pages/settings'



function App() {
 

  return (
    <>
   <Routes>
    <Route element={<Mainlayout/>}>
    <Route path='/' element={<Navigate to={"/dashboard"} replace/> }/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/users' element={<User/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/orders' element={<Order/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/settings' element={<Settings/>}/>


    </Route>
   </Routes>
 
    </>
  )
}

export default App
