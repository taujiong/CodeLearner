/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 中等
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let res = '';
  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--;
      n++;
    }
    if (n - m - 1 > res.length) {
      res = s.slice(m + 1, n);
    }
  }
  return res;
};

var longestPalindromeWithDp = function (s) {
  if (!s || s.length === 0) return '';
  let res = s[0];

  const dp = [];

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true;
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
      else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
};
