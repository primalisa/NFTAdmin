import React from "react";
import "./App.css";
const Card = ({ count, info, iconName }) => {
  return (
    <div class="card">
      <div class="card1">
        <img src={iconName} alt="" />
      </div>

      <div class="card2">
        <h1>{count}</h1>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Card;
