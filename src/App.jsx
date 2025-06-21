import './App.css'
import Home from './components/home/home'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './routes/PrivateRoutes'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard'
import ManagerDashboard from './components/ManagerDashboard/ManagerDashboard'
import Unauthorized from './components/unauthorized/Unauthorized'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route element={<PrivateRoutes/>}>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/home' element={<Home/>} />
        </Route>

        <Route element={<PrivateRoutes allowedRoles={['admin']}/>}>
          <Route path='/admin' element={<AdminDashboard/>} />
        </Route>

        <Route element={<PrivateRoutes allowedRoles={['customer']}/>}>
            <Route path='/customer' element={<CustomerDashboard/>} /> 
        </Route>
        
        <Route element={<PrivateRoutes allowedRoles={['manager']} />}>
            <Route path="/manager" element={<ManagerDashboard />} />
        </Route>

        <Route path='/unauthorized' element={<Unauthorized/>} />
      </Routes>
    </>
  )
}

export default App
