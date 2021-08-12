/**
 * https://leetcode-cn.com/problems/edit-distance/
 * 困难
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length;

  if (m * n === 0) return m + n;

  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let fromLeft = dp[i - 1][j] + 1,
        fromUp = dp[i][j - 1] + 1,
        fromUpLeft = dp[i - 1][j - 1];
      if (word1[i - 1] != word2[j - 1]) fromUpLeft++;
      dp[i][j] = Math.min(fromUp, fromUpLeft, fromLeft);
    }
  }

  return dp[m][n];
};
