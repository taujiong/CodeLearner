/**
 * https://leetcode-cn.com/problems/maximum-length-of-subarray-with-positive-product/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let positiveMax = nums[0] > 0 ? 1 : 0,
    negativeMax = nums[0] < 0 ? 1 : 0,
    ans = positiveMax;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveMax++;
      negativeMax = negativeMax > 0 ? negativeMax + 1 : 0;
    } else if (nums[i] < 0) {
      let positive = positiveMax,
        negative = negativeMax;
      positiveMax = negative > 0 ? negative + 1 : 0;
      negativeMax = positive + 1;
    } else {
      positiveMax = 0;
      negativeMax = 0;
    }
    ans = Math.max(positiveMax, ans);
  }

  return ans;
};
