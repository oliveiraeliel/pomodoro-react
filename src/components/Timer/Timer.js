import React, { useContext, useEffect } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";

import "./Timer.css";

export default function Timer() {
  const { count, min, setMin, sec, setSec } = useContext(PomodoroContext);
  let minutes = min;
  let seconds = 0;


  function toCount() {
    setInterval(() => {
      if (seconds == 0 && minutes > 0) {
        minutes -= 1;
        seconds = 59;
        document.getElementsByClassName("sec")[0].textContent = seconds;

        if (minutes.toString().length == 1) {
          document.getElementsByClassName("min")[0].textContent = `0${minutes}`;
        } else document.getElementsByClassName("min")[0].textContent = minutes;
      } else if (seconds > 0) {
        seconds -= 1;

        if (seconds.toString().length == 1)
          document.getElementsByClassName("sec")[0].textContent = `0${seconds}`;
        else document.getElementsByClassName("sec")[0].textContent = seconds;
      }
      console.log(minutes + ":" + seconds);
    }, 1000);
  }

  useEffect(() => {
    if (count) {
      toCount()
    }
  }, [count]);

  return (
    <div className="timer">
      <span className="min">
        {min.toString().length === 1 ? `0${min}` : min}
      </span>
      :
      <span className="sec">
        00
      </span>
    </div>
  );
}
