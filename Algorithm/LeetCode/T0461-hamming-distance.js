/**
 * https://leetcode-cn.com/problems/hamming-distance/
 * 简单，位运算
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let s = x ^ y,
    result = 0;

  while (s != 0) {
    s &= s - 1;
    result++;
  }

  return result;
};
