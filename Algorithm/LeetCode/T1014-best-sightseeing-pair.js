/**
 * https://leetcode-cn.com/problems/best-sightseeing-pair/
 * 中等，动态规划
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let iMax = values[0],
    ans = 0;

  for (let i = 1; i < values.length; i++) {
    iMax = Math.max(iMax, i - 1 + values[i - 1]);
    ans = Math.max(ans, iMax + values[i] - i);
  }

  return ans;
};
