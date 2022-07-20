import React from "react";
import "./App.css";
import back from './images/back-arrow.png'; 
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
import 
{ 
  Link
  
} from 'react-router-dom';
const addCollection = () => (
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
              <Link className="back" to="/FeaturedCollection"><img src={back} alt="" /></Link></div>
              <div>
              <h1>Add Featured Collection</h1></div>
        </div>
        <div className="content">
          <p>Only 4 left</p>
          <div>
            <p>Search NFT</p>
            <input placeholder="User NFT name or paste URL"  />
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

export default  addCollection;