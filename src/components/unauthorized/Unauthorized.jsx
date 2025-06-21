import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate('/home');
    }
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🚫 Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default Unauthorized;
