import React from 'react'
import Profile from '../profile/Profile'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>  
      <div className='redirecting-links'>
        <Link to='/admin'>Admin</Link>
        <Link to='/manager'>manager</Link>
        <Link to='/customer'>customer</Link>
      </div>
      <Profile/>
    </div>
  )
}

export default Home
