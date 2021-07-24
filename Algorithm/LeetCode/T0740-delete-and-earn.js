/**
 * https://leetcode-cn.com/problems/delete-and-earn/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let maxVal = 0;
  for (const val of nums) {
    maxVal = Math.max(maxVal, val);
  }
  const sum = new Array(maxVal + 1).fill(0);
  for (const val of nums) {
    sum[val] += val;
  }
  return rob(sum);
};

/**
 * 复用 T198 的代码
 * @param {Array<number>} nums
 */
const rob = function (nums) {
  if (nums.length <= 2) return Math.max(...nums);

  let first = nums[0],
    second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let temp = Math.max(first + nums[i], second);
    first = second;
    second = temp;
  }

  return second;
};
