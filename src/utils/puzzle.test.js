import { calcBoardSize, isWon, swapIndex, convertFlatData } from "./puzzle";

describe("puzzle.js", () => {
  describe("calcBoardSize()", () => {
    it("Should calc the board size", () => {
      const boardData = [1, 2, 3, 4, 5, 6, 8, 7, null];
      expect(calcBoardSize(boardData)).toBe(3);
    });
    it("Should return false with invalid board", () => {
      const boardData = [1, 2, 3, 4, 6, 8, 7, null];
      expect(calcBoardSize(boardData)).toBe(false);
    });
  });
  describe("isWon()", () => {
    it("Should return true if won", () => {
      const boardData = [1, 2, 3, 4, null, 5, 6, 7, 8];
      expect(isWon(boardData)).toBe(true);
    });
    it("Should return false if not won", () => {
      const boardData = [1, 3, 2, 4, null, 5, 6, 7, 8];
      expect(isWon(boardData)).toBe(false);
    });
  });
  describe("convertFlatData()", () => {
    it("Should convert flat data", () => {
      const boardData = [1, 2, 3, 4, null, 5, 6, 7, 8];
      expect(JSON.stringify(convertFlatData(boardData))).toBe(
        JSON.stringify([
          [1, 2, 3],
          [4, null, 5],
          [6, 7, 8]
        ])
      );
    });
  });
  describe("swapIndex()", () => {
    it("Should swap indexes", () => {
      const boardData = [1, 2, 3, 4, null, 5, 6, 7, 8];
      expect(swapIndex(boardData, 0, 2)).toEqual([
        3,
        2,
        1,
        4,
        null,
        5,
        6,
        7,
        8
      ]);
    });
  });
});
