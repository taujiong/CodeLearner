/**
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * 简单
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0,
    ans = nums[0];

  for (const num of nums) {
    pre = Math.max(num, num + pre);
    ans = Math.max(pre, ans);
  }

  return ans;
};
