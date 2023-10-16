import React from "react";
import "./Warning.css";
import Vector from "../assets/Vector.png";
const Warning = () => {
  return (
    <div className="warning-message">
      <img src={Vector} alt="React Image" /> &nbsp; Minimum 3 category required
    </div>
  );
};

export default Warning;
