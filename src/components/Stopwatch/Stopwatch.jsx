import React, { useState, useRef, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import uparrow from "../assets/uparrow.png";
import downarrow from "../assets/downarrow.png";
import audioFile from "../assets/alarm.mp3";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const formatWithLeadingZero = (value) => (value < 10 ? `0${value}` : value);

  const totalSeconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

  const formatTime = (timeInSeconds) => {
    if (timeInSeconds <= 0) {
      return "00:00:00";
    }
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const countdownRef = useRef();

  const toggleTimer = () => {
    if (isTimerRunning || isAudioPlaying) {
      setIsTimerRunning(false);

      setIsAudioPlaying(false);
      audioRef.current.pause();
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setDuration(0);
      setRemainingTime(0);

      if (countdownRef.current) {
        countdownRef.current.api.reStart();
      }
    } else {
      setIsTimerRunning(true);
      setDuration(totalSeconds);
    }
  };

  const handleIncrement = (field) => {
    if (field === "hours") {
      setHours((prevHours) => prevHours + 1);
    } else if (field === "minutes") {
      setMinutes((prevMinutes) =>
        prevMinutes < 59 ? prevMinutes + 1 : prevMinutes
      );
    } else if (field === "seconds") {
      setSeconds((prevSeconds) =>
        prevSeconds < 59 ? prevSeconds + 1 : prevSeconds
      );
    }
  };

  const handleDecrement = (field) => {
    if (field === "hours") {
      setHours((prevHours) => (prevHours > 0 ? prevHours - 1 : prevHours));
    } else if (field === "minutes") {
      setMinutes((prevMinutes) =>
        prevMinutes > 0 ? prevMinutes - 1 : prevMinutes
      );
    } else if (field === "seconds") {
      setSeconds((prevSeconds) =>
        prevSeconds > 0 ? prevSeconds - 1 : prevSeconds
      );
    }
  };

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioFile));

  useEffect(() => {
    audioRef.current.addEventListener("ended", () => {
      setIsAudioPlaying(false);
    });

    return () => {
      audioRef.current.removeEventListener("ended", () => {
        setIsAudioPlaying(false);
      });
    };
  }, []);
  const handleComplete = () => {
    // setIsTimerRunning(false);
    // setRemainingTime(0);
    setIsAudioPlaying(true);
    audioRef.current.play();
  };
  return (
    <div className="countdown-timer">
      <div className="displayTime-box">
        <div className="circle">
          <CountdownCircleTimer
            ref={countdownRef}
            isPlaying={isTimerRunning}
            key={duration}
            duration={duration}
            size={100}
            strokeWidth={6}
            colors={[["#F44336"]]}
            onComplete={() => {
              {
                handleComplete();
              }
              setIsTimerRunning(false);
              setHours(0);
              setMinutes(0);
              setSeconds(0);
              setDuration(0);
              setRemainingTime(0);
            }}
          >
            {({ remainingTime }) => {
              setRemainingTime(remainingTime);
              return (
                <div className="remaining-time">
                  {formatTime(remainingTime)}
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>
      </div>
      <div className="setTime-box">
        <div className="time-input">
          <div className="input-container">
            <div className="time-name">
              <h2>Hours</h2>
            </div>
            <div>
              <img
                src={uparrow}
                className="arrow-up"
                onClick={() => handleIncrement("hours")}
                alt="noimg"
              />
            </div>
            <div className="time-field">
              <input
                name="hours"
                type="number"
                value={formatWithLeadingZero(hours)}
                disabled
                onChange={(e) => setHours(e.target.value)}
              />
            </div>
            <div>
              <img
                src={downarrow}
                className="arrow-down"
                onClick={() => handleDecrement("hours")}
                alt="noimg"
              />
            </div>
          </div>
          <div className="dot">:</div>
          <div className="input-container">
            <div className="time-name">
              <h2>Minutes</h2>
            </div>
            <div>
              <img
                src={uparrow}
                className="arrow-up"
                onClick={() => handleIncrement("minutes")}
                alt="noimg"
              />
            </div>

            <div className="time-field">
              <input
                name="minutes"
                type="number"
                value={formatWithLeadingZero(minutes)}
                min="0"
                max="59"
                onChange={(e) => setMinutes(e.target.value)}
                disabled
              />
            </div>
            <div>
              <img
                src={downarrow}
                className="arrow-down"
                onClick={() => handleDecrement("minutes")}
                alt="noimg"
              />
            </div>
          </div>
          <div className="dot">:</div>
          <div className="input-container">
            <div className="time-name">
              <h2>Seconds</h2>
            </div>
            <div>
              <img
                src={uparrow}
                className="arrow-up"
                onClick={() => handleIncrement("seconds")}
                alt="noimg"
              />
            </div>
            <div className="time-field">
              <input
                name="seconds"
                type="number"
                value={formatWithLeadingZero(seconds)}
                min="0"
                max="59"
                disabled
                onChange={(e) => setSeconds(e.target.value)}
              />
            </div>
            <div>
              <img
                src={downarrow}
                className="arrow-down"
                onClick={() => handleDecrement("seconds")}
                alt="noimg"
              />
            </div>
          </div>
        </div>
        <div className="toggle-button">
          <button onClick={toggleTimer}>
            {isTimerRunning || isAudioPlaying ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
