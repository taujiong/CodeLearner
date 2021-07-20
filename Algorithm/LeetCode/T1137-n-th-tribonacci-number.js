/**
 * https://leetcode-cn.com/problems/n-th-tribonacci-number/
 * 简单
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 3) return n == 0 ? 0 : 1;

  let [t1, t2, t3] = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    [t1, t2, t3] = [t2, t3, t1 + t2 + t3];
  }

  return t3;
};
