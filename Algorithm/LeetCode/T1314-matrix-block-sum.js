/**
 * https://leetcode-cn.com/problems/matrix-block-sum/
 * 中等
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  let m = mat[0].length;
  let n = mat.length;

  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] =
        dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }

  let ans = new Array(n).fill(0).map(() => new Array(m));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let sl = i - k >= 0 ? i - k : 0;
      let sr = j - k >= 0 ? j - k : 0;
      let bl = i + k + 1 < n ? i + k + 1 : n;
      let br = j + k + 1 < m ? j + k + 1 : m;
      ans[i][j] = dp[bl][br] - dp[sl][br] - dp[bl][sr] + dp[sl][sr];
    }
  }

  return ans;
};
