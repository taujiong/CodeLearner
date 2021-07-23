/**
 * https://www.nowcoder.com/practice/8a7bff7ab0d345d5ac5c82e41d9f7115
 * 流程控制
 * @param {any} num
 */
function fizzBuzz(num) {
  return num && typeof num === 'number'
    ? num % 3 === 0 && num % 5 === 0
      ? 'fizzbuzz'
      : num % 3 === 0
      ? 'fizz'
      : num % 5 === 0
      ? 'buzz'
      : num
    : false;
}
