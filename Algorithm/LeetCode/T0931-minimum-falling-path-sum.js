/**
 * https://leetcode-cn.com/problems/minimum-falling-path-sum/
 * 中等
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  if (n === 0) return 0;
  if (n === 1) return matrix[0][0];

  let getValue = (i, j) => {
    return matrix[i][j] ?? Infinity;
  };

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] += Math.min(
        getValue(i - 1, j - 1),
        getValue(i - 1, j),
        getValue(i - 1, j + 1)
      );
    }
  }

  return Math.min(...matrix[n - 1]);
};
