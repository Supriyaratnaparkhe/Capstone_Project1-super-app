import React from "react";
import "./ProfileCard.css";
import image14 from "../assets/image14.png";
const ProfileCard = () => {
  const storedSelectedItems =
    JSON.parse(localStorage.getItem("selectedItems")) || [];
  const storedUserData = JSON.parse(localStorage.getItem("UserState")) || [];
  return (
    <div className="profile-card">
      <div className="image-profile">
        <img src={image14} alt="React Image" />
      </div>
      <div className="user-info">
        <h3>{storedUserData.Name}</h3>
        <h3>{storedUserData.email}</h3>
        <h1>{storedUserData.userName}</h1>
      </div>
      <div className="movies">
        {storedSelectedItems.map((item) => (
          <div className="movie-names">{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
