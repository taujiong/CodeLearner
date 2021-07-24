/**
 * https://leetcode-cn.com/problems/maximum-product-subarray/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxP = nums[0],
    minP = nums[0],
    ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    (mx = maxP), (mn = minP);
    maxP = Math.max(mx * nums[i], nums[i], mn * nums[i]);
    minP = Math.min(mx * nums[i], nums[i], mn * nums[i]);
    ans = Math.max(maxP, ans);
  }

  return ans;
};
