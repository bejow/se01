import React from "react";
import styles from "./Row.module.css";
import { Cell } from "../Cell";

const Row = ({ row }) => {
  return (
    <div className={styles.container}>
      {row.map(cell => (
        <Cell value={cell} />
      ))}
    </div>
  );
};

export default Row;
