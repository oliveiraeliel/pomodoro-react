import React from "react";

import "./App.css";
import PomodoroContextProvider from "./contexts/PomodoroContext";
import { Timer, Board } from "./components/index";

export function App() {
  return (
    <PomodoroContextProvider>
      <Board />
    </PomodoroContextProvider>
  );
}
