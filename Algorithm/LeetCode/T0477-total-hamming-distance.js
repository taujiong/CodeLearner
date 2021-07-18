/**
 * https://leetcode-cn.com/problems/total-hamming-distance/
 * 中等，按位计算
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let ans = 0;
  let n = nums.length;

  for (let i = 0; i < 30; i++) {
    let c = 0;
    for (const num of nums) {
      c += (num >> i) & 1;
    }
    ans += c * (n - c);
  }

  return ans;
};
