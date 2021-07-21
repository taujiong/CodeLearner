/**
 * https://www.nowcoder.com/practice/6429776e4630435cbc3eeb36bdf41f83
 * 乘法
 * @param {number} a
 * @param {number} b
 */
function multiply(a, b) {
  let totalPercision = getPercision(a) + getPercision(b);
  return parseFloat(a * b).toFixed(totalPercision);
}

/**
 * 获取数字的精度（小数的个数）
 * @param {number} num
 */
function getPercision(num) {
  return num.toString().includes('.') ? num.toString().split('.')[1].length : 0;
}
