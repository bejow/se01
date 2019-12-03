import React from "react";
import styles from "./Cell.module.css";

const Cell = ({ value }) => {
  return <div className={styles.square}>{value}</div>;
};

export default Cell;
