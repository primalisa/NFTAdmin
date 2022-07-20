import React from "react";
import "./App.css";
import back from './images/back-arrow.png';
import Sidebar from "./Sidebar"; 
import Navbar from "./Navbar"
import 
{ 
  Link
  
} from 'react-router-dom';
const AddNewCategory= () => (
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
              <h1>Add New category</h1></div>
        </div>
        <div className="content">
          <div>
            <p>Category Name</p>
            <input placeholder="Display Name" />
            
          </div>
          <div className="Categorysearch">
          <p>Search User</p>
          <input type="radio" id="Yes" name="fav_language" value="Yes"></input>
          <label for="yes">Yes</label><br></br>
          <input type="radio" id="No" name="fav_language" value="Yes"></input>
          <label for="No">No</label><br></br>
            
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

export default  AddNewCategory;