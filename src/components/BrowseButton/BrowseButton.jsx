import React from "react";
import "./BrowseButton.css";
const BrowseButton = ({ onClick, navigateto2 }) => {
  return (
    <div className="browse-button">
      <button onClick={() => onClick(navigateto2)}>Browse</button>
    </div>
  );
};

export default BrowseButton;
