/**
 * https://leetcode-cn.com/problems/wiggle-subsequence/
 *中等
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let len = nums.length;
  if (len <= 1) return len;

  let positive = 1,
    negative = 1;

  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (nums[i] > nums[i - 1]) {
      positive = negative + 1;
    } else {
      negative = positive + 1;
    }
  }

  return Math.max(positive, negative);
};
