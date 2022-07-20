import React from "react";
import "./App.css"
import DatePick from "./DatePicker";
import "./Allnotification.css";
import sqr from "./images/sendnotification/sqr.png";
import { Link } from "react-router-dom";
import back from "./images/sendnotification/back.png";
import IconCalender from "./images/sendnotification/Icon-calendar.png";
import ssqr from "./images/sendnotification/ssqr.png";
import path from "./images/sendnotification/Path.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
export default function Allnotification() {
  return (
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
              <Link className="back" to="/SendNotification"><img src={back} alt="" /></Link></div>
              
            <h1>All Notification</h1>

            </div>
      
      <div className="sf2">
        <div className="cola">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "20px 0",
            }}
          >
            <h3>All Notification</h3>
            <div className="Date">
              <img src={IconCalender} alt="Icon" />
              <DatePick />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div className="gap" style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
          <div className="gap" 
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div  style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
          <div className="gap" 
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div  className="gap" style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
          <div className="gap" 
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>12 Jan 2022</p>
            <img src={ssqr}></img>
            <div style={{ marginLeft: "13px" }}>
              <h3>Heading</h3>
              <p
                style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}
              >
                simply dummy text of the printing & type setting industry. Lorem
                Ipsum has been...
              </p>
            </div>
            <img src={path}></img>
          </div>
          <hr />
        </div>
        <div className="col3"></div>
        <div className="colb">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "20px 0",
            }}
          >
            <p  style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}>12 Jan 2022</p>
            <button className="btna">Delete</button>
          </div>
          <img src={sqr}></img>
          <p  style={{
                  textAlign: "left",
                  letterSpacing: "0.28px",
                  fontSize: "14px",
                }}>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown
          </p>
        </div>
      </div>
   

    </div>
      </div>
    </section>
  </div>
  );
}
