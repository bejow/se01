import React from "react";
import styles from "./Board.module.css";
import { Row } from "../Row";

const Board = ({ boardData, onCellClick }) => {
  return (
    <div className={styles.container}>
      {boardData.map(row => (
        <Row onCellClick={onCellClick} row={row} />
      ))}
    </div>
  );
};

export default Board;
