/**
 * https://leetcode-cn.com/problems/jump-game/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true;

  var dp = new Array(nums.length);
  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i] = i + nums[i];
    for (let j = 1; j <= nums[i] && i + j < nums.length - 1; j++) {
      dp[i] = Math.max(dp[i], dp[i + j]);
    }
  }

  return dp[0] >= nums.length - 1;
};

/**
 * https://leetcode-cn.com/problems/jump-game/
 * 中等，贪心
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpGreedy = function (nums) {
  let rightMost = 0;
  for (let i = 0; i <= rightMost; i++) {
    rightMost = Math.max(rightMost, i + nums[i]);
    if (rightMost >= nums.length - 1) return true;
  }

  return false;
};
