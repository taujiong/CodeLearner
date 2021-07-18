/**
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * 中等，字典优化
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    nums[i] += nums[i - 1] ?? 0;
  }

  for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
      const sum = end === start ? nums[start] : nums[end] - nums[start];
      if (sum === k) ans++;
    }
  }

  return ans;
};

// 复杂度O(n^2)，超时
// var subarraySum = function (nums, k) {
//   const n = nums.length;
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     nums[i] += nums[i - 1] ?? 0;
//   }

//   for (let start = 0; start < n; start++) {
//     for (let end = start; end < n; end++) {
//       const sum = end === start ? nums[start] : nums[end] - nums[start];
//       if (sum === k) ans++;
//     }
//   }

//   return ans;
// };
