import React from 'react'
import './App.css'
import adminlogo from "./images/Adminlogin.png"
import logo from "./images/LOGO.png"
 const Navbar =function()
{
  return(
    <div className='Navbar'>
      <img src={logo} alt="" />
       <img src={adminlogo} alt="" />



    </div>
  )
}

export default Navbar;