import React from "react";
import "./App.css";
import back from './images/back-arrow.png'; 
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
import 
{ 
  Link
  
} from 'react-router-dom';
const Demo = () => (
  <div>
    <Navbar></Navbar>
    <section>
      <div className="sidepanel"><Sidebar></Sidebar></div>
      <div className="dashboard">
      <div className="container">
        <div className="FirstRow">
             <div>
              <Link className="back" to="/Fees"><img src={back} alt="" /></Link></div>
              <div>
              <h1>Change Amount</h1></div>
        </div>
        <div className="content">
          <p>Buyer</p>
          <div>
            <p>New Price</p>
            <input  />
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

export default  Demo;