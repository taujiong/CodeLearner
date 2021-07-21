/**
 * https://www.nowcoder.com/practice/0fcb4eb9306d4bec837d0037fe39bcf7
 * 判断是否包含数字
 * @param {string} str
 */
function containsNumber(str) {
  return [].some.call(str, (char) => !isNaN(parseInt(char)));
}

function containsNumberWithRegx(str) {
  var b = /\d/;
  return b.test(str);
}
