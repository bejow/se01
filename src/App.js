import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import {
  defaultBoardNormalData,
  defaultBoardEasyData,
  defaultBoardBigEasyData
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
  const [moves, setMoves] = useState(0);
  const [games, setGames] = useState([]);
  const [play, setPlay] = useState(true);
  const flatBoard = data.flat();

  const onCellClick = value => {
    const nullNeighbor = getNullNeighborIndex(flatBoard, value);
    if (nullNeighbor !== false) {
      const newData = swapIndex(
        flatBoard,
        flatBoard.indexOf(value),
        nullNeighbor
      );
      setMoves(moves + 1);
      setData(convertFlatData(newData));
    }
  };

  const finished = isWon(flatBoard);
  const gameOver = games.length > 2;

  if (finished) {
    setGames([...games, moves]);
    setMoves(0);
    setData(defaultBoardEasyData);
    setPlay(false);
  }

  return (
    <div className={styles.App}>
      {gameOver ? (
        <div>
          <div>Game Over</div>
          <div>Best try (moves): {Math.min(...games)}</div>
        </div>
      ) : !play ? (
        <div className={styles.winContainer}>
          <div>Congratulation you solved it</div>
          <button onClick={() => setPlay(true)}>Restart</button>
        </div>
      ) : (
        <div className={styles.winContainer}>
          <Board boardData={data} onCellClick={onCellClick} />
          <div>Moves {moves}</div>
          <div>Game {games.length + 1}</div>
          <div>Best try: {Math.min(...games)}</div>
        </div>
      )}
    </div>
  );
}

export default App;
