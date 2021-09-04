/**
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * 简单
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    while (nums[start] % 2 !== 0 && start < end) start++;
    while (nums[end] % 2 === 0 && end > start) end--;
    if (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
    }
  }

  return nums;
};
