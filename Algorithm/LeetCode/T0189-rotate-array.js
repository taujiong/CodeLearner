/**
 * https://leetcode-cn.com/problems/rotate-array/
 * 中等，翻转的思路看官方题解方法 3
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function (nums, k) {
  // 双指针实现数组倒序
  const reverse = (nums, start, end) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start += 1;
      end -= 1;
    }
  };

  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
