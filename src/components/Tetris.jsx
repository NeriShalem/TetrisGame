import React from "react";
import Board from "./Board";
import "./tetris.css";

const Tetris = ({ rows, columns, setGameOver }) => {
  return (
    <>
      <Board />
    </>
  );
};

export default Tetris;
