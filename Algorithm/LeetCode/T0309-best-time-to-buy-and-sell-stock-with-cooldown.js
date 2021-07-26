/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * 中等，动态规划
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let hold = -prices[0],
    empty = 0,
    emptyForCooldown = 0,
    ans = 0;

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, emptyForCooldown - prices[i]);
    emptyForCooldown = empty;
    empty = Math.max(empty, hold + prices[i]);
    ans = Math.max(hold, empty, emptyForCooldown);
  }

  return ans;
};
