/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * 中等
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [],
    path = [],
    len = candidates.length;
  candidates.sort();
  backtracking(0, 0);
  return res;
  function backtracking(sum, i) {
    if (sum > target) return;
    if (sum === target) {
      res.push(path.slice());
      return;
    }
    let f = -1;
    for (let j = i; j < len; j++) {
      const n = candidates[j];
      if (n > target - sum || n === f) continue;
      path.push(n);
      sum += n;
      f = n;
      backtracking(sum, j + 1);
      path.pop();
      sum -= n;
    }
  }
};
