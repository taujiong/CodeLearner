/**
 * https://leetcode-cn.com/problems/maximal-square/
 * 中等
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;

  let maxSide = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || matrix[i][j] === '0')
        matrix[i][j] = parseInt(matrix[i][j]);
      else {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]) +
          1;
      }
      maxSide = Math.max(maxSide, matrix[i][j]);
    }
  }

  return maxSide ** 2;
};
