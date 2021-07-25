/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 简单，动态规划
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp0 = 0,
    dp1 = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    let newDp0 = Math.max(dp0, dp1 + prices[i]);
    let newDp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
  }

  return dp0;
};

var maxProfitWithGreedy = function (prices) {
  let ans = 0;

  for (let i = 1; i < prices.length; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }

  return ans;
};
