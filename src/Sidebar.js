import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
// import './custom.scss';

import "./App.css"

import  asvg from  "./images/a.svg"
import  bsvg from  "./images/b.svg"
import  csvg from  "./images/c.svg"
import  dsvg from  "./images/d.svg"
import  esvg from  "./images/e.svg"
import  fsvg from  "./images/f.svg"
import  gsvg from  "./images/g.svg"
import  hsvg from  "./images/h.svg"
import  isvg from  "./images/i.svg"



export default function sidebar() {
  return (
    <ProSidebar>
    <Menu iconShape="square">
      <MenuItem to="/" icon = {<img src={asvg}/>}>Dashboard <Link to="/"></Link></MenuItem>
      <br/>
     
      <MenuItem icon = {<img src={dsvg}/>}>Category List <Link to="/CategoryList"></Link></MenuItem>
      <br/>
      <MenuItem icon = {<img src={esvg}/>}>Send Notification <Link to="/SendNotification"></Link></MenuItem>
      <br/>
      <MenuItem icon = {<img src={fsvg}/>}>Fees <Link to="/Fees"></Link></MenuItem>
      <br/>
      <MenuItem icon = {<img src={gsvg}/>}>Transactions <Link to="/Transactions"></Link></MenuItem>
      <br/>
      <div>
        <h2 className="dashboardsettingsidebar">Dashboard Setting</h2>
      <MenuItem icon = {<img src={hsvg}/>}>Featured Users <Link to="/FeaturedUsers"></Link></MenuItem> </div>
      <br/>
      <MenuItem icon = {<img src={isvg}/>}>Featured Collection <Link to="/FeaturedCollection"></Link></MenuItem>
     
    </Menu>
  </ProSidebar>
  )
}




