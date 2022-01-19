import React, { useState, createContext } from "react";

export const PomodoroContext = createContext();

export default function PomodoroContextProvider({ children }) {
  const [status, setStatus] = useState("pomodoro"); // "pomodoro", "short" (short pause) or "long" (long pause)
  const [count, setCount] = useState(false);
  const [min, setMin] = useState(25);
  const [cron, setCron] = useState(null);

  const state = {
    status,
    setStatus,
    count,
    setCount,
    setMin,
    min,
    cron,
    setCron,
  };

  return (
    <PomodoroContext.Provider value={state}>
      {children}
    </PomodoroContext.Provider>
  );
}
