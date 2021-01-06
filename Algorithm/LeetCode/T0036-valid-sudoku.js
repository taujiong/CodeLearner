/**
 * https://leetcode-cn.com/problems/valid-sudoku/
 * 中等，hashset
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const rows = [],
    columns = [],
    boxes = [];

  for (let i = 0; i < 9; i++) {
    rows[i] = [];
    columns[i] = [];
    boxes[i] = [];
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (value !== ".") {
        if (
          rows[i].includes(value) ||
          columns[j].includes(value) ||
          boxes[boxIndex].includes(value)
        ) {
          return false;
        }

        rows[i].push(value);
        columns[j].push(value);
        boxes[boxIndex].push(value);
      }
    }
  }

  return true;
};
