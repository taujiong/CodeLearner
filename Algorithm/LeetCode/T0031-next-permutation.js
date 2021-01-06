/**
 * https://leetcode-cn.com/problems/next-permutation/
 * 中等，关键在理解
 * @param {number[]} nums
 * @return {void}
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};
