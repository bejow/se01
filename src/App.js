import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";
import { defaultBoardData } from "./static/boardData";

function App() {
  const [data, setData] = useState(defaultBoardData);

  return (
    <div className='App'>
      <Board boardData={data} />
    </div>
  );
}

export default App;
