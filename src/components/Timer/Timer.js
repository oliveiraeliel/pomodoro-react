import React, { useContext, useEffect } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";

import "./Timer.css";

import src from "../../assets/beep.mp3";
const audio = new Audio(src);

export default function Timer() {
  const { count, min, cron, setCron, setCount } = useContext(PomodoroContext);
  let minutes = min;
  let seconds = 0;

  function start() {
    setCron(
      setInterval(() => {
        timer();
      }, 1000)
    );
  }

  useEffect(() => {
    audio.play();
    if (count) start();
    else clearInterval(cron);
  }, [count]);

  function timer() {
    minutes = document.getElementsByClassName("min")[0].textContent;
    seconds = document.getElementsByClassName("sec")[0].textContent;

    if (seconds == 0 && minutes > 0) {
      minutes -= 1;
      seconds = 59;
      document.getElementsByClassName("sec")[0].textContent = seconds;

      if (minutes.toString().length == 1)
        document.getElementsByClassName("min")[0].textContent = `0${minutes}`;
      else document.getElementsByClassName("min")[0].textContent = minutes;
    } else if (seconds > 0) {
      seconds -= 1;
      if (seconds.toString().length == 1)
        document.getElementsByClassName("sec")[0].textContent = `0${seconds}`;
      else document.getElementsByClassName("sec")[0].textContent = seconds;
    } else {
      clearInterval(cron);
      setCount(false);
    }
  }

  return (
    <div className="timer">
      <span className="min">
        {min.toString().length === 1 ? `0${min}` : min}
      </span>
      :<span className="sec">00</span>
    </div>
  );
}
