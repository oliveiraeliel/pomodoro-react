import React from "react";

import "./App.css";
import PomodoroContextProvider from "./contexts/PomodoroContext";
import Board from "./components/Board/Board";

export function App() {
  return (
    <PomodoroContextProvider>
      <Board />
    </PomodoroContextProvider>
  );
}