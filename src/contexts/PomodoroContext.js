import React, { useState, useContext, createContext } from "react";

export const PomodoroContext = createContext();

export default function PomodoroContextProvider({ children }) {
  const [status, setStatus] = useState("pomodoro");

  const state = {
    status,
    setStatus,
  };

  return (
    <PomodoroContext.Provider value={state}>
      {children}
    </PomodoroContext.Provider>
  );
}
