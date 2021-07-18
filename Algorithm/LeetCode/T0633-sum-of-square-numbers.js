/**
 * https://leetcode-cn.com/problems/sum-of-square-numbers/
 * 中等，双指针
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let large = Math.floor(Math.sqrt(c));
  let small = 0;
  let sum = 0;

  while (small <= large) {
    sum = small * small + large * large;
    if (sum === c) return true;

    if (sum < c) {
      small += 1;
    } else {
      large -= 1;
    }
  }

  return false;
};
