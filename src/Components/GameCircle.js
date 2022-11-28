import React, { useState } from "react";
import "../Game.css";

const onClick = (id, onCircleClicked) => {
  // alert("on Click" + id);
  onCircleClicked(id);
};
const GameCircle = ({ id, onCircleClicked, className, children }) => {
  return (
    <div
      className={`gameCircle ${className}`}
      onClick={() => onClick(id, onCircleClicked)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
