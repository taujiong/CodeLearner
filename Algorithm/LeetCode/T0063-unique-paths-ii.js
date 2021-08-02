/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 中等
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length,
    matrix = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        matrix[i][j] = obstacleGrid[0][0] === 1 ? 0 : 1;
        continue;
      }
      if (obstacleGrid[i][j] === 1) matrix[i][j] = 0;
      else {
        let fromLeft = j > 0 ? matrix[i][j - 1] : 0;
        let fromUp = i > 0 ? matrix[i - 1][j] : 0;
        matrix[i][j] = fromLeft + fromUp;
      }
    }
  }

  return matrix[m - 1][n - 1];
};
