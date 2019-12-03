import React from "react";
import styles from "./Row.module.css";
import { Cell } from "../Cell";

const Row = ({ row, onCellClick }) => {
  return (
    <div className={styles.container}>
      {row.map(cell => (
        <Cell onClick={() => onCellClick(cell)} value={cell} />
      ))}
    </div>
  );
};

export default Row;
