/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * 困难
 * @param {number[]} numbers
 * @return {number}
 */
var findMin = function (numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) return numbers[i + 1];
  }
  return numbers[0];
};
