import React, { useContext } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";

import "./Controls.css";

function Controls() {
  const { setCount } = useContext(PomodoroContext);

  function handleClickStart() {
    setCount(true);
  }

  function handleClickPause() {
    setCount(false);
  }

  return (
    <div className="controls">
      <button onClick={handleClickStart}>Start</button>
      <button onClick={handleClickPause}>Pause</button>
    </div>
  );
}

export default Controls;
