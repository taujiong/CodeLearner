/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 简单，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0,
    maxAns = nums[0];

  for (let num of nums) {
    pre = Math.max(num, num + pre);
    maxAns = Math.max(maxAns, pre);
  }

  return maxAns;
};
