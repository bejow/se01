import React from "react";
import styles from "./Board.module.css";
import { Row } from "../Row";

const Board = ({ boardData }) => {
  return (
    <div className={styles.container}>
      {boardData.map(row => (
        <Row row={row} />
      ))}
    </div>
  );
};

export default Board;
