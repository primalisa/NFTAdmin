import React from "react";
import "./App.css";
import Card from "./Card";
import Donut from "./Donut";
import DatePick from "./DatePicker";
import IconCalender from "./images/Icon-calendar.png";
import Users from "./images/Users.png";
import Diamond from "./images/Diamond.png";
import Buy from "./images/Buy.png";
import ActiveUsers from "./images/ActiveUser.png";
import SLchart from "./Chart";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
const App = () => (
  <div>
    <Navbar></Navbar>
    <section>

    
    <div className="sidepanel">
      <Sidebar></Sidebar>
    </div>

      <div className="dashboard">
        <div className="container">
          <div className="firstrow">
            <h2>Dashboard</h2>
            <div className="DWM">
              <button>Day</button>
              <button>Week</button>
              <button>Month</button>
            </div>
            <div className="Date">
              <img src={IconCalender} alt="Icon" />
              <DatePick />
              <div>
                <p>To</p>
              </div>
              <DatePick />
            </div>
          </div>
          <div className="cards">
            <div className="left-card">
              <Card iconName={Users} info="No of Users" count={347} />
              <Card iconName={Diamond} info="No of Token" count={201} />
              <Card iconName={Buy} info="No of Buy" count={158} />
              <Card iconName={ActiveUsers} info="Active Users" count={276} />
            </div>
            <div className="right-card">
              <h3>NFT Performance</h3>
              <div>
                <Donut />
              </div>
            </div>
          </div>
          <div className="splineChart">
            <div className="chartcontainer">
              <h3>Overall Activity</h3>
              <SLchart types="spline" />
            </div>
          </div>

          <div className="splineChart">
            <div className="chartcontainer">
              <h3>Fees Performance</h3>
              
              <SLchart types="line" />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default App;
