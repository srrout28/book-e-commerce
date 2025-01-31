import React from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

// Sidebar for Admin panel...
const Sidebar = () => {
  return (
   <>
    <div className="sidebar">
        <div className="sidebar-options">
            <NavLink to='/' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/add'  className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/users'  className="sidebar-option">
                <img src={assets.profile_image} alt=""  />
                <p>Users List</p>
            </NavLink>
        </div>
    </div>
   </>
  )
};

export default Sidebar;