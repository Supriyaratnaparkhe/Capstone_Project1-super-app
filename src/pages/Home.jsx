import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import NewsCard from "../components/NewsCard/NewsCard";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import AllNotes from "../components/AllNotes/AllNotes";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import BrowseButton from "../components/BrowseButton/BrowseButton";

const Home = () => {
  const navigateto2 = useNavigate();
  const handleBrowseClick = () => {
    navigateto2("/browse");
  };
  return (
    <>
      <div className="Home">
        <div className="left-cards">
          <div className="upper-card">
            <div>
              <div className="userProfile-card">
                <ProfileCard />
              </div>
              <div>
                <WeatherCard />
              </div>
            </div>
            <div className="allnotes">
              <AllNotes />
            </div>
          </div>
          <div className="lower-card">
            <Stopwatch />
          </div>
        </div>
        <div className="right-cards">
          <NewsCard />
          <BrowseButton onClick={handleBrowseClick} />
        </div>
      </div>
    </>
  );
};

export default Home;
