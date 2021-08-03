/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 简单
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }
};
