import './globals.css'
import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import Users from './pages/admin/pengguna/Users'
import AddUser from './pages/admin/pengguna/AddUsers'
import Laporan from './pages/admin/dasboard/Laporan'
import { Login } from './auth/Login'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/users' element={<Users/>} />
      <Route path='/add-users' element={<AddUser/>} />
      <Route path='/laporan' element={<Laporan/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
 
  )
}
export default App;