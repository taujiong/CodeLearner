/**
 * https://leetcode-cn.com/problems/decode-ways/
 * 中等
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length;
  // a = dp[i-2], b = dp[i-1], c = dp[i]
  let a = 0,
    b = 1,
    c = 0;
  for (let i = 1; i <= n; ++i) {
    c = 0;
    if (s[i - 1] !== '0') {
      c += b;
    }
    if (
      i > 1 &&
      s[i - 2] != '0' &&
      (s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26
    ) {
      c += a;
    }
    a = b;
    b = c;
  }
  return c;
};
