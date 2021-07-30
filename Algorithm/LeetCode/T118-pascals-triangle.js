/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * 简单
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]];
  for (let i = 1; i < numRows; i++) {
    let upper = ans[i - 1];
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(upper[j - 1] + upper[j]);
    }
    row.push(1);
    ans.push(row.slice());
  }

  return ans;
};

generate(10);
