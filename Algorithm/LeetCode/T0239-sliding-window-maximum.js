/**
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 困难，单调队列
 * TODO: 复习
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) {
    return nums;
  }

  const q = [];

  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }

  const result = [nums[q[0]]];
  for (let i = k; i < nums.length; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);

    while (q[0] <= i - k) {
      q.shift();
    }

    result.push(nums[q[0]]);
  }

  return result;
};
