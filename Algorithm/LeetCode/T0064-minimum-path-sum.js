/**
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * 中等
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;

  let fromLeft, fromRight;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      fromLeft = i === 0 ? Infinity : grid[i - 1][j];
      fromRight = j === 0 ? Infinity : grid[i][j - 1];
      if (i != 0 || j != 0) {
        grid[i][j] += Math.min(fromLeft, fromRight);
      }
    }
  }

  return grid[m - 1][n - 1];
};
