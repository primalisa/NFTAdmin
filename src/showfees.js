import React from "react";
import "./App.css";
import back from './images/back-arrow.png'; 
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
import 
{ 
  Link
  
} from 'react-router-dom';
const showfees = () => (
  <div>
    <Navbar></Navbar>
    <section>
      <div className="sidepanel">
        <Sidebar></Sidebar>
      </div>
      <div className="dashboard">
      <div className="container">
        <div className="FirstRow">
             <div>
              <Link className="back" to="/Fees"><img src={back} alt="" /></Link></div>
              <div>
              <h1>View Fees</h1></div>
        </div>
        <div className="content">
          <div>
            <p>Fee Type</p>
            <input  />
          </div>
          <div>
            <p>Per NFT</p>
            <input  />
          </div>
          
        </div>
      </div>
      </div>

      </section>
  </div>
)

export default showfees;