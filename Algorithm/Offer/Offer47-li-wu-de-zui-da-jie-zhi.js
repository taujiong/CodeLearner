/**
 * https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
 * 中等
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  let m = grid.length,
    n = grid[0].length;

  for (i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < n; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[m - 1][n - 1];
};
