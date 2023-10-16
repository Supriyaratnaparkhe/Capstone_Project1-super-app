import React from "react";
import "./SelectedItemDisplay.css";
const SelectedItemDisplay = ({ items, onRemove }) => {
  return (
    <div className="display-box">
      {items.map((item) => (
        <div className="display-item" key={item.id}>
          <div className="item-name">{item.name} </div>
          <div className="close">
            <button onClick={() => onRemove(item.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SelectedItemDisplay;
