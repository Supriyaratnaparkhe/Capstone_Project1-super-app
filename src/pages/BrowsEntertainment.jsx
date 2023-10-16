import React from "react";
import { useNavigate } from "react-router-dom";
import "./BrowseEntertainment.css";
import image5 from "../components/assets/image5.png";
import Entertainment from "../components/Entertainment/Entertainment";
const BrowsEntertainment = () => {
  const navigateto3 = useNavigate();
  const handleBackPage = () => {
    navigateto3("/home");
  };

  return (
    <div className="browse-ent">
      <div className="head-bar">
        <div className="head-name">Super app</div>
        <div className="back-button">
          <img onClick={handleBackPage} src={image5} alt="none" />
        </div>
      </div>
      <div className="entertainment-container">
        <h2>Entertainment according to your choice</h2>
        <Entertainment />
      </div>
    </div>
  );
};

export default BrowsEntertainment;
