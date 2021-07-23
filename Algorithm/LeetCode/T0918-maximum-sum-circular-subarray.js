/**
 * https://leetcode-cn.com/problems/maximum-sum-circular-subarray/
 * 中等，动态规划
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let N = nums.length;
  let cur = nums[0],
    ans = nums[0];

  // 1 首先，计算单区间的最大值
  for (let i = 1; i < N; i++) {
    cur = nums[i] + Math.max(cur, 0);
    ans = Math.max(ans, cur);
  }

  // 2 接着，考虑双区间的最大值
  // 2.1 首先，双区间必然会要包含最后一个元素，我们将从第 j 个元素到最后一个元素的区间和保存起来
  let rightSums = new Array(N);
  rightSums[N - 1] = nums[N - 1];
  for (let j = N - 2; j >= 0; j--) {
    rightSums[j] = rightSums[j + 1] + nums[j];
  }

  // 2.2 接着，根据 2.1 的区间和，我们找出从第 j 个元素到最后一个元素的区间中能够找到的最大值
  let rightMax = new Array(N);
  rightMax[N - 1] = nums[N - 1];
  for (let j = N - 2; j >= 0; j--) {
    rightMax[j] = Math.max(rightMax[j + 1], rightSums[j]);
  }

  // 2.3 接着，我们从左边的第一个元素开始寻找新的最大值
  let leftSum = 0;
  for (let i = 0; i < N - 2; i++) {
    leftSum += nums[i];
    ans = Math.max(ans, leftSum + rightMax[i + 2]); // 为什么是 i+2？因为 i+1 就等同于单区间了
  }

  // 3 最大值要么在单区间要么在双区间
  return ans;
};
