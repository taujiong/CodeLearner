/**
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 * 中等
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  if (s.length < 2) return s.length;
  let len = s.length,
    dp = new Array(len).fill(0).map((_) => new Array(len).fill(0));

  for (let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }

  return dp[0][len - 1];
};
