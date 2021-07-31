/**
 * https://leetcode-cn.com/problems/triangle/
 * 中等
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length;
  if (n === 0) return 0;

  let ans = new Array(n).fill(0);
  ans[0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    ans[i] = triangle[i][i] + ans[i - 1];
    for (let j = i - 1; j > 0; j--) {
      ans[j] = triangle[i][j] + Math.min(ans[j], [ans[j - 1]]);
    }
    ans[0] = triangle[i][0] + ans[0];
  }

  return Math.min(...ans);
};
