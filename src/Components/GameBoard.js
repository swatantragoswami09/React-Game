import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";

const NO_CIRCLES = 16;
const No_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(No_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  const initBoard = () => {
    const circles = [];

    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const circleClicked = (id) => {
    // debugger;
    console.log("circle clicked:" + id);
    // const board = [...gameBoard];
    // board[id] = currentPlayer;
    // setGameBoard(board);
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(gameBoard);
    console.log(currentPlayer);
  };
  const renderCircle = (id) => {
    return (
      <GameCircle
        className={`player_${gameBoard[id]}`}
        id={id}
        key={id}
        onCircleClicked={circleClicked}
      />
    );
  };

  return (
    <>
      <Header />
      <div className="gameBoard">{initBoard()}</div>
      <Footer />
    </>
  );
}
