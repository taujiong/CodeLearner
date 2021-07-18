/**
 * https://leetcode-cn.com/problems/single-number-ii/
 * 中等，奇技淫巧，二进制位牛逼
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort();
  const length = nums.length;
  for (let i = 0; i < length; i += 3) {
    if (i === length - 1 || nums[i] !== nums[i + 1]) return nums[i];
  }
};
