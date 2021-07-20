/**
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * 简单，动态规划
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length <= 2) return Math.min(...cost);

  let p = 0,
    q = 0,
    r = 0;

  for (let i = 2; i <= cost.length; i++) {
    r = Math.min(p + cost[i - 2], q + cost[i - 1]);
    p = q;
    q = r;
  }

  return r;
};
