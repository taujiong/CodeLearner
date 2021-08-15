/**
 * https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 * 中等
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  if (num < 10) return 1;

  let numArr = num.toString().split('').map(Number),
    len = numArr.length,
    p = 1,
    q = 1;

  for (let i = 1; i < len; i++) {
    let temp = q;
    if (numArr[i - 1] === 1 || (numArr[i - 1] === 2 && numArr[i] < 6))
      temp += p;

    p = q;
    q = temp;
  }

  return q;
};
