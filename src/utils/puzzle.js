const getNullNeighborIndex = (data, value) => {
  const boardSize = calcBoardSize(data);
  const valueIndex = data.indexOf(value);
  const nullIndex = data.indexOf(null);
  const heighestIndex = data.length;

  if (valueIndex + 1 === nullIndex && (valueIndex + 1) % boardSize !== 0) {
    // null is to the right
    return valueIndex + 1;
  }
  if (valueIndex - 1 === nullIndex && valueIndex % boardSize !== 0) {
    // null is to the left
    return valueIndex - 1;
  }
  if (
    valueIndex + boardSize === nullIndex &&
    valueIndex + boardSize <= heighestIndex
  ) {
    // null is at the bottom
    return valueIndex + boardSize;
  }
  if (valueIndex - boardSize === nullIndex && valueIndex - boardSize >= 0) {
    // null is at the top
    return valueIndex - boardSize;
  }
  return false;
};

const swapIndex = (data, fromIndex, toIndex) => {
  const dataCopy = [...data];
  const fromValue = dataCopy[fromIndex];
  dataCopy[fromIndex] = dataCopy[toIndex];
  dataCopy[toIndex] = fromValue;
  return dataCopy;
};

const calcBoardSize = data => {
  const size = Math.sqrt(data.length);
  if (size % 1 === 0) {
    return size;
  }
  return false;
};

const isWon = data => {
  const filteredData = data.filter(value => value !== null); //remove null
  const sortedCopy = [...filteredData].sort(sortNumber);
  console.log(data);
  console.log("filtered", JSON.stringify(filteredData));
  console.log("sorted", JSON.stringify(sortedCopy));
  if (JSON.stringify(filteredData) === JSON.stringify(sortedCopy)) {
    return true;
  }
  return false;
};

const sortNumber = (a, b) => {
  return a - b;
};

const convertFlatData = data => {
  const nestedData = [];
  const boardSize = calcBoardSize(data);
  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    const row = [];
    for (let column = 0; column < boardSize; column++) {
      const index = rowIndex * boardSize + column;
      row.push(data[index]);
    }
    nestedData.push(row);
  }
  return nestedData;
};

export {
  calcBoardSize,
  getNullNeighborIndex,
  isWon,
  swapIndex,
  convertFlatData
};
