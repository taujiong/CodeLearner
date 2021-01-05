/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * 简单，双指针
 * TODO: 了解官方题解 3，滚动 hash 方法判断字符串相等
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const l = haystack.length, s = needle.length;

  if (s === 0) {
    return 0;
  }
  let matchedLength = 1;
  for (let i = 0; i < l - s + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 1; j < s; j++) {
        if (haystack[i + j] === needle[j]) {
          matchedLength++;
        } else {
          matchedLength = 1;
          break;
        }
      }

      if (matchedLength === s) {
        return i;
      }
    }
  }

  return -1;
};
