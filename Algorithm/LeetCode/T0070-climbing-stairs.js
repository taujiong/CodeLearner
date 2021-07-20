/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 简单，动态规划
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let p2 = 1,
    p1 = 2,
    r = 3;
  for (let i = 3; i <= n; i++) {
    r = p2 + p1;
    p2 = p1;
    p1 = r;
  }

  return r;
};
