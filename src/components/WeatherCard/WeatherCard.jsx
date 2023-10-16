import React, { useEffect, useState } from "react";
import "./WeatherCard.css";
import humid from "../assets/Wimages/humid.png";
import line1 from "../assets/Wimages/line1.png";
import thermometer from "../assets/Wimages/thermometer.png";
import wind from "../assets/Wimages/wind.png";

const WeatherCard = () => {
  const [weatherInfo, setWeatherInfo] = useState();

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=775260f4ae964de699380148230910&q=Nanded&aqi=yes"
    )
      .then((res) => res.json())
      .then((weatherInfo) => {
        setWeatherInfo(weatherInfo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="weather-card">
      <div className="time-zone">
        <div className="date">
          {weatherInfo && weatherInfo.location.localtime.slice(0, 10)}
        </div>
        <div className="time">
          <div>
            {weatherInfo && weatherInfo.location.localtime.slice(11, 13) > 12
              ? weatherInfo && weatherInfo.location.localtime.slice(11, 13) - 12
              : weatherInfo && weatherInfo.location.localtime.slice(11, 13)}
            {weatherInfo && weatherInfo.location.localtime.slice(13, 16)}
          </div>
          <div>
            {weatherInfo &&
            weatherInfo.location.localtime.slice(11, 13) > 12 ? (
              <div> &nbsp; PM</div>
            ) : (
              <div> &nbsp; AM</div>
            )}
          </div>
        </div>
      </div>
      <div className="weather">
        <div className="part-1">
          <div className="weather-icon">
            <img
              src={weatherInfo && weatherInfo.current.condition.icon}
              alt="react-image"
            />
          </div>
          <div className="weather-condition">
            {weatherInfo && weatherInfo.current.condition.text}
          </div>
        </div>
        <div className="line">
          <img src={line1} alt="react-image" />
        </div>
        <div className="part-2">
          <div className="temperature">
            {weatherInfo && weatherInfo.current.temp_c}℃
          </div>
          <div className="pressure">
            <div>
              <img src={thermometer} alt="react-image" />
            </div>
            <div>
              {" "}
              {weatherInfo && weatherInfo.current.pressure_mb} mbar <br />{" "}
              Pressure{" "}
            </div>
          </div>
        </div>
        <div className="line">
          <img src={line1} alt="react-image" />
        </div>
        <div className="part-3">
          <div className="wind-speed">
            <div>
              <img src={wind} alt="react-image" />
            </div>
            <div>
              {weatherInfo && weatherInfo.current.wind_kph} km/h <br /> Wind
            </div>
          </div>
          <div className="humidity">
            <div>
              <img src={humid} alt="react-image" />
            </div>
            <div>
              {weatherInfo && weatherInfo.current.humidity}% <br /> Humidity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
