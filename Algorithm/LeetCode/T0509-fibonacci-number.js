/**
 * https://leetcode-cn.com/problems/fibonacci-number/
 * 简单，迭代
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }

  let a = 0, b = 1;

  for (let i = 1; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
};

/**
 * https://leetcode-cn.com/problems/fibonacci-number/
 * 简单，矩阵快速幂
 * TODO: 知识储备
 * @param {number} n
 * @return {number}
 */
var officialSolution = function (n) {
  if (n < 2) {
    return n;
  }
  const q = [[1, 1], [1, 0]];
  const res = pow(q, n - 1);
  return res[0][0];
};

const pow = (a, n) => {
  let ret = [[1, 0], [0, 1]];
  while (n > 0) {
    if ((n & 1) === 1) {
      ret = multiply(ret, a);
    }
    n >>= 1;
    a = multiply(a, a);
  }
  return ret;
}

const multiply = (a, b) => {
  const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
    }
  }
  return c;
}
