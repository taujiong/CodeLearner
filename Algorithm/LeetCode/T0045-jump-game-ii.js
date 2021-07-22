/**
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length <= 1) return 0;

  var dp = new Array(nums.length);
  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i] = i + nums[i] >= nums.length - 1 ? 1 : Infinity;
    for (let j = 1; j <= nums[i] && i + j < nums.length - 1; j++) {
      dp[i] = Math.min(dp[i], dp[i + j] + 1);
    }
  }

  return dp[0];
};

/**
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var jumpGreedy = function (nums) {
  let end = 0,
    maxPosition = 0,
    steps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i == end) {
      end = maxPosition;
      steps++;
    }
  }

  return steps;
};
