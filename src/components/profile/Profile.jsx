import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/Auth/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { logout, user, loading } = useContext(AuthContext);

  const handleLogOut = () =>{
    logout();
    navigate('/');
    toast("Logout Successfully...");
  }

  return (
    <div>
      {
        loading ? 
        <div>Please Wait Fetching User Profile.... </div> : 
        user && 
        <div>
          <h2> Name: {user.name}</h2>
          <h2>Role : {user.role}</h2>
        </div>
        
      }

      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Profile
