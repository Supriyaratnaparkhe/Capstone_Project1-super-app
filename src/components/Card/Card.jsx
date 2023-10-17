import React from "react";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import "./Card.css";

const Card = ({ onAdd, selectedItems }) => {
  return (
    <div className="cards">
      <div className="row">
        <div
          className={`ele-1 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 1)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Action</div>
          <div className="picture">
            <img onClick={() => onAdd(1)} src={image2} alt="React Image" />
          </div>
        </div>
        <div
          className={`ele-2 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 2)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Drama</div>
          <div className="picture">
            <img onClick={() => onAdd(2)} src={image3} alt="React Image" />
          </div>
        </div>
        <div
          className={`ele-3 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 3)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Romance</div>
          <div className="picture">
            <img onClick={() => onAdd(3)} src={image4} alt="React Image" />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className={`ele-4 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 4)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Thriller</div>
          <div className="picture">
            <img onClick={() => onAdd(4)} src={image6} alt="React Image" />
          </div>
        </div>
        <div
          className={`ele-5 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 5)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Western</div>
          <div className="picture">
            <img onClick={() => onAdd(5)} src={image7} alt="React Image" />
          </div>
        </div>
        <div
          className={`ele-6 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 6)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Horror</div>
          <div className="picture">
            <img onClick={() => onAdd(6)} src={image8} alt="React Image" />
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className={`ele-7 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 7)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Fantacy</div>
          <div className="picture">
            <img onClick={() => onAdd(7)} src={image9} alt="React Image" />
          </div>
        </div>
        <div
          className={`ele-8 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 8)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Music</div>
          <div className="picture">
            <img onClick={() => onAdd(8)} src={image10} alt="React Image" />
          </div>
        </div>
        <div
          className={`ele-9 col ${
            selectedItems.some((selectedItem) => selectedItem.id === 9)
              ? "selected"
              : ""
          }`}
        >
          <div className="title">Fiction</div>
          <div className="picture">
            <img onClick={() => onAdd(9)} src={image11} alt="React Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
