import React, { useState, useContext, createContext } from "react";

export const PomodoroContext = createContext();

export default function PomodoroContextProvider({ children }) {
  const [status, setStatus] = useState("pomodoro");
  const [count, setCount] = useState(false);
  const [min, setMin] = useState(25)
  const [sec, setSec] = useState(60)

  const state = {
    status,
    setStatus, count, setCount, setMin, min, sec, setSec
  };

  return (
    <PomodoroContext.Provider value={state}>
      {children}
    </PomodoroContext.Provider>
  );
}
