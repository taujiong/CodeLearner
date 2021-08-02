/**
 * 寻找矩阵中数字 1 能围起来的最大正方形的面积
 * @param {number[][]} matrix
 */
function maxSquare(matrix) {
  const m = matrix.length;
  if (m === 0) return 0;

  function check(i, j, len) {
    for (k = 0; k < len; k++) {
      for (z = 0; z < len; z++) {
        if (matrix[i + k][j + z] === 0) return false;
      }
    }

    return true;
  }

  const n = matrix[0].length;
  let currentMax = Math.min(m, n);
  for (; currentMax >= 1; currentMax--) {
    for (let i = 0; i + currentMax <= n; i++) {
      for (let j = 0; j + currentMax <= m; j++) {
        if (check(i, j, currentMax)) return currentMax ** 2;
      }
    }
  }

  return 0;
}
