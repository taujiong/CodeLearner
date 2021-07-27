/**
 * https://leetcode-cn.com/problems/word-break/
 * 中等，动态规划
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length).fill(false);
  dp[0] = wordDict.includes(s[0]);
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j <= i && dp[i] === false; j++) {
      let strSlice = s.slice(j, i + 1);
      dp[i] = (j === 0 || dp[j - 1]) && wordDict.includes(strSlice);
    }
  }

  return dp[s.length - 1];
};
