import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Auth/AuthContext';


const PrivateRoutes = ({allowedRoles}) => {
   const {isAuthenticated, user} = useContext(AuthContext);

   if(!isAuthenticated) return <Navigate to='/' />

   if( allowedRoles && !allowedRoles.includes(user?.role)) return <Navigate to='/unauthorized' />;
   
   return <Outlet/>;
}

export default PrivateRoutes
