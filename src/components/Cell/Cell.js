import React from "react";
import styles from "./Cell.module.css";

const Cell = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className={styles.square}>
      {value}
    </div>
  );
};

export default Cell;
