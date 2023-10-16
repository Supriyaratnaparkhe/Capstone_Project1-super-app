import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import SelectedItemDisplay from "../components/SelectedItemDisplay/SelectedItemDisplay";
import Card from "../components/Card/Card";
import NextPage from "../components/NextPage/NextPage";
import Warning from "../components/Warning/Warning";

const Category = () => {
  const navigateto = useNavigate();
  const initialItems = [
    { id: 1, name: "Action" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Romance" },
    { id: 4, name: "Thriller" },
    { id: 5, name: "Western" },
    { id: 6, name: "Horror" },
    { id: 7, name: "Fantacy" },
    { id: 8, name: "Music" },
    { id: 9, name: "Fiction" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const handleAddItem = (itemId) => {
    const selectedItem = initialItems.find((item) => item.id === itemId);

    if (selectedItem && !selectedItems.find((item) => item.id === itemId)) {
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  const handleRemoveItem = (itemId) => {
    const removedItem = selectedItems.find((item) => item.id === itemId);

    if (removedItem) {
      setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
    }
  };
  const showWarning = selectedItems.length < 3;
  const handleNextClick = () => {
    if (!showWarning) {
      localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
      navigateto("/home");
    }
  };

  return (
    <>
      <div className="category">
        <div className="left">
          <div className="appname">Super App</div>
          <div className="content-heading">
            Choose your
            <br /> entertainment <br /> category
          </div>
          <div className="display-category">
            <SelectedItemDisplay
              items={selectedItems}
              onRemove={handleRemoveItem}
            />
          </div>
          <div className="warning">{showWarning && <Warning />}</div>
        </div>
        <div className="right">
          <Card onAdd={handleAddItem} selectedItems={selectedItems} />
        </div>
      </div>
      <div className="next-button">
        <NextPage onClick={handleNextClick} />
      </div>
    </>
  );
};
export default Category;
