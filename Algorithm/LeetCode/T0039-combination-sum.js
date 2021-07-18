/**
 * https://leetcode-cn.com/problems/combination-sum/
 * 中等，递归，剪枝
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];

  const dfs = (start, combine, sum) => {
    if (sum > target) return;
    if (sum === target) {
      ans.push(combine.slice());
      return;
    }

    for (let index = start; index < candidates.length; index++) {
      combine.push(candidates[index]);
      dfs(index, combine, sum + candidates[index]);
      combine.pop();
    }
  };

  dfs(0, [], 0);

  return ans;
};
