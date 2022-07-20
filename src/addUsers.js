import React from "react";
import "./App.css";
import back from './images/back-arrow.png';
import Sidebar from "./Sidebar"; 
import Navbar from "./Navbar"
import 
{ 
  Link
  
} from 'react-router-dom';
const addUsers = () => (
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
              <Link className="back" to="/FeaturedUsers"><img src={back} alt="" /></Link></div>
              <div>
              <h1>Add Featured Users</h1></div>
        </div>
        <div className="content">
          <p>Only 4 user left</p>
          <div>
            <p>Search User</p>
            <input placeholder="Search User or paste URL" />
            <button class="search">Add</button>
            
          </div>
          <div>
          <button class="search">Submit</button>
          <button class="search">Cancel</button>
          </div>
        </div>
      </div>
      </div>

      </section>
  </div>
)

export default  addUsers;