import { Fragment, useState } from 'react'
import './globals.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import Users from './pages/admin/pengguna/Users'
import AddUser from './pages/admin/pengguna/AddUsers'
import Laporan from './pages/admin/dasboard/Laporan'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/users' element={<Users/>} />
      <Route path='/add-users' element={<AddUser/>} />
      <Route path='/laporan' element={<Laporan/>} />
    </Routes>
 
  )
}
export default App