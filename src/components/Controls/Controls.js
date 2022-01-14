import React, { useContext } from "react";
import { PomodoroContext } from "../../contexts/PomodoroContext";

import "./Controls.css";

function Controls() {
  const {} = useContext(PomodoroContext);

  return (
    <div className="controls">
      <button>Start</button>
      <button>Pause</button>
    </div>
  );
}

export default Controls;
