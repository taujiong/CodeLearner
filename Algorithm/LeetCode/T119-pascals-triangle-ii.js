/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * 简单
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let ans = [1];
  for (let i = 1; i < rowIndex; i++) {
    let temp = ans.slice();
    for (let j = 1; j < i; j++) {
      ans[j] = temp[j - 1] + temp[j];
    }
    ans.push(1);
  }

  return ans;
};
