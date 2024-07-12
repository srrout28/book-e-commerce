import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

// Navigation bar...
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img className='logo' src={assets.logo} height={"40px"} alt="" />
        <h2>Admin Panel</h2>
        <div className='profile-flex'>
          <img className='profile' src={assets.profile_image} alt="" />
          <p>admin</p>
        </div>
      </div>
    </>
  )
}

export default Navbar