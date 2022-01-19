import React, { useContext, useEffect } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";

import "./Options.css";

export default function Options() {
  const { status, setStatus, setMin, setCount } = useContext(PomodoroContext);

  function handleClickPomodoro() {
    setStatus("pomodoro");
    setMin(25);
    setCount(false);
    document.getElementsByClassName("sec")[0].textContent = "00";
  }
  function handleClickShortPause() {
    setStatus("short");
    setMin(5);
    setCount(false);
    document.getElementsByClassName("sec")[0].textContent = "00";
  }
  function handleClickLongPause() {
    setStatus("long");
    setMin(15);
    setCount(false);
    document.getElementsByClassName("sec")[0].textContent = "00";
  }

  useEffect(() => {
    if (status === "short") document.body.style.backgroundColor = "#9faed6 ";
    if (status === "long") document.body.style.backgroundColor = "#999999   ";
    if (status === "pomodoro") document.body.style.backgroundColor = "#d74426 ";
  }, [status]);

  return (
    <div className="options">
      <button
        className="pomodoro"
        onClick={handleClickPomodoro}
        disabled={status == "pomodoro" ? true : false}
        style={
          status == "pomodoro"
            ? { background: "#e2725b" }
            : { background: "transparent" }
        }
      >
        Pomodoro
      </button>
      <button
        onClick={handleClickShortPause}
        disabled={status == "short" ? true : false}
        style={
          status == "short"
            ? { background: "#c0c0c0" }
            : { background: "transparent" }
        }
      >
        Short Pause
      </button>
      <button
        onClick={handleClickLongPause}
        disabled={status == "long" ? true : false}
        style={
          status == "long"
            ? { background: "#bfbfbf   " }
            : { background: "transparent" }
        }
      >
        Long Pause
      </button>
    </div>
  );
}