import React, { useContext } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";

import "./Controls.css";

export default function Controls() {
  const { setCount, count } = useContext(PomodoroContext);

  function handleClickStart() {
    setCount(true);
  }

  function handleClickPause() {
    setCount(false);
  }

  return (
    <div className="controls">
      <button
        onClick={handleClickStart}
        style={count ? { background: "#cecec5" } : { background: "white" }}
        disabled={count ? true : false}
      >
        Start
      </button>
      <button
        onClick={handleClickPause}
        style={!count ? { background: "#cecec5" } : { background: "white" }}
        disabled={!count ? true : false}
      >
        Pause
      </button>
    </div>
  );
}