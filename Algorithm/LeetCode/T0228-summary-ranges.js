/**
 * https://leetcode-cn.com/problems/summary-ranges/
 * 简单，双指针
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let low = 0;
  let high = 0;
  const ans = [];

  while (high < nums.length) {
    high++;

    if (high === nums.length || nums[high] - nums[low] !== high - low) {
      let temp = nums[low].toString();
      if (high - low > 1) {
        temp = temp + "->" + nums[high - 1];
      }
      ans.push(temp);
      low = high;
    }
  }

  return ans;
};
