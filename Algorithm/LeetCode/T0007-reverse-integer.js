/**
 * https://leetcode-cn.com/problems/reverse-integer/solution/wei-yun-suan-ji-jian-jie-fa-by-ijzqardmbd/
 * 简单，位运算
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  while (x !== 0) {
    result = result * 10 + x % 10;
    x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};
