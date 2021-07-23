/**
 * https://leetcode-cn.com/problems/house-robber/solution/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    let first = nums[0];
    let second = Math.max(nums[0], nums[1]);

    for (let index = 2; index < nums.length; index++) {
      let temp = second;
      second = Math.max(first + nums[index], temp);
      first = temp;
    }

    return second;
  }
};
