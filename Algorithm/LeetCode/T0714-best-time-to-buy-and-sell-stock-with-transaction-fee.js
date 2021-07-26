/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * 中等，动态规划
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let hold = -prices[0],
    empty = 0,
    ans = 0;

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, empty - prices[i]);
    empty = Math.max(empty, hold + prices[i] - fee);
    ans = Math.max(empty, hold);
  }

  return ans;
};
