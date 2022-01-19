import React from "react";

import { Controls, Options, Timer } from "../index";

import "./Board.css";

export default function Board() {
  return (
    <div className="board">
      <Options />
      <Timer />
      <Controls />
    </div>
  );
}
