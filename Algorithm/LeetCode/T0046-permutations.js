/**https://leetcode-cn.com/problems/permutations/
 * 中等
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [],
    path = [],
    used = new Array(nums.length).fill(false);

  function backtrace() {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrace();
      used[i] = false;
      path.pop();
    }
  }

  backtrace();

  return ans;
};
