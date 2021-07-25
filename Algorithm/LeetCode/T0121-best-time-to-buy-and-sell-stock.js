/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 简单，动态规划
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let mn = prices[0],
    ans = 0;
  for (let i = 1; i < prices.length; i++) {
    ans = Math.max(ans, prices[i] - mn);
    mn = Math.min(mn, prices[i]);
  }

  return Math.max(0, ans);
};
