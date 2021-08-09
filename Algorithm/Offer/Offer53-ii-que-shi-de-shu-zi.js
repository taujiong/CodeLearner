/**
 * https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
 * 简单
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    let m = Math.floor((i + j) / 2);
    if (m === nums[m]) i = m + 1;
    else j = m - 1;
  }

  return i;
};
