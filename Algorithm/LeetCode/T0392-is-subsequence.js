/**
 * https://leetcode-cn.com/problems/is-subsequence/
 * 简单
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sLen = s.length,
    tLen = t.length;

  if (sLen > tLen) return false;

  let sIndex = 0,
    tIndex = 0;
  while (sIndex < sLen && tIndex < tLen) {
    if (t[tIndex] === s[sIndex]) {
      sIndex++;
    }
    tIndex++;
  }

  return sIndex === sLen;
};

/**
 * https://leetcode-cn.com/problems/is-subsequence/
 * 简单
 * 97 为字符 a 在 ASCII 中的编号
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let tLen = t.length,
    sLen = s.length;
  let dp = new Array(tLen + 1).fill(0).map(() => []);

  for (let i = 0; i < 26; i++) {
    dp[tLen][i] = tLen;
  }

  for (let i = tLen - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t.charCodeAt(i) === j + 97) dp[i][j] = i;
      else dp[i][j] = dp[i + 1][j];
    }
  }

  let add = 0;
  for (let i = 0; i < sLen; i++) {
    let index = s.charCodeAt(i) - 97;
    if (dp[add][index] === tLen) return false;
    add = dp[add][index] + 1;
  }

  return true;
};
