/**
 * https://leetcode-cn.com/problems/power-of-two/
 * 简单，位运算
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
