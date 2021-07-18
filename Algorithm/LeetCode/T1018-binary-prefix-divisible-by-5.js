/**
 * https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/
 * 简单，考虑溢出，所以只对余数进行操作
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const answer = [];

  let tempValue = 0;
  for (let i = 0; i < A.length; i++) {
    tempValue = (2 * tempValue + A[i]) % 5;
    answer.push(tempValue === 0);
  }

  return answer;
};
