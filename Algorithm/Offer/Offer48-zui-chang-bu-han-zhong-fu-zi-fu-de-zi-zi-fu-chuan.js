/**
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * 中等
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  if (len <= 1) return len;

  let ans = 1,
    dp = 1;

  for (let i = 1; i < len; i++) {
    let has = false;
    for (let j = i - dp; j <= i - 1; j++) {
      if (s[j] === s[i]) {
        dp = i - j;
        has = true;
        break;
      }
    }
    if (!has) dp++;
    ans = Math.max(ans, dp);
  }

  return ans;
};
