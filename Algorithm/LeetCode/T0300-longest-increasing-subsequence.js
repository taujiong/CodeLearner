/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const f = new Array(n).fill(1);

  let ans = 1;
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) {
        f[i] = Math.max(f[i], f[j] + 1);
      }
    }
    ans = Math.max(ans, f[i]);
  }
  return ans;
};
