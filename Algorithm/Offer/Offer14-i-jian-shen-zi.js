/**
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 * 中等
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1;
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    let mid = Math.floor(i / 2);
    for (let j = 1; j <= mid; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * dp[j]);
    }
  }

  return dp[n];
};
