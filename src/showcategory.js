import React from "react";
import "./App.css";
import back from './images/back-arrow.png'; 
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
import 
{ 
  Link
  
} from 'react-router-dom';
const showcategory = () => (
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
              <Link className="back" to="/CategoryList"><img src={back} alt="" /></Link></div>
              <div>
              <h1>View</h1></div>
        </div>
        <div className="content">
          <div>
            <p>Category Name</p>
            <input  />
          </div>
          <div>
            <p>Active</p>
            <input  />
          </div>
          
        </div>
      </div>
      </div>

      </section>
  </div>
)

export default showcategory;