/**
 * https://leetcode-cn.com/problems/word-search/
 * 中等
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length,
    n = board[0].length,
    wordLen = word.length,
    used = new Array(m);

  for (let i = 0; i < m; i++) {
    used[i] = new Array(n).fill(false);
  }

  let inBound = (i, j) => {
    return i >= 0 && i < m && j >= 0 && j < n;
  };

  let dfs = (row, column, index) => {
    if (
      !inBound(row, column) ||
      used[row][column] ||
      board[row][column] !== word[index]
    )
      return false;

    if (index === wordLen - 1) return true;

    used[row][column] = true;
    let ans =
      dfs(row, column + 1, index + 1) ||
      dfs(row, column - 1, index + 1) ||
      dfs(row + 1, column, index + 1) ||
      dfs(row - 1, column, index + 1);
    used[row][column] = false;

    return ans;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
