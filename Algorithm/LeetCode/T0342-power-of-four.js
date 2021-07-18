/**
 * https://leetcode-cn.com/problems/power-of-four/
 * 简单，位运算
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};
