/**
 * https://leetcode-cn.com/problems/arithmetic-slices/
 * 中等
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;

  let minus = nums[1] - nums[0],
    currentCount = 0,
    ans = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === minus) {
      currentCount++;
      ans += currentCount;
    } else {
      currentCount = 0;
      minus = nums[i] - nums[i - 1];
    }
  }

  return ans;
};
