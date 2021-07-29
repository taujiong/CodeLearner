/**
 * https://leetcode-cn.com/problems/permutations-ii/
 * 中等，递归回溯
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let ans = [],
    vis = new Array(nums.length).fill(false);
  const backtrack = (idx, perm) => {
    if (idx === nums.length) {
      ans.push(perm.slice());
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      perm.push(nums[i]);
      vis[i] = true;
      backtrack(idx + 1, perm);
      vis[i] = false;
      perm.pop();
    }
  };
  nums.sort((x, y) => x - y);
  backtrack(0, []);
  return ans;
};
