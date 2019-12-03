import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import {
  defaultBoardNormalData,
  defaultBoardEasyData
} from "./static/boardData";
import {
  getNullNeighborIndex,
  swapIndex,
  convertFlatData,
  isWon
} from "./utils/puzzle";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState(defaultBoardEasyData);
  const flatBoard = data.flat();

  const onCellClick = value => {
    const nullNeighbor = getNullNeighborIndex(flatBoard, value);
    if (nullNeighbor !== false) {
      const newData = swapIndex(
        flatBoard,
        flatBoard.indexOf(value),
        nullNeighbor
      );
      setData(convertFlatData(newData));
    }
  };

  const finished = isWon(flatBoard);

  return (
    <div className={styles.App}>
      {finished ? (
        <div className={styles.winContainer}>
          <div>Congratulation you solved it</div>
          <button onClick={() => setData(defaultBoardNormalData)}>
            Restart
          </button>
        </div>
      ) : (
        <Board boardData={data} onCellClick={onCellClick} />
      )}
    </div>
  );
}

export default App;
