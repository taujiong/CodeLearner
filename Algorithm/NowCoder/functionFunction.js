/**
 * https://www.nowcoder.com/practice/1f9fd23cdfd14675ab10207191e1d035
 * 返回函数
 * @param {string} str
 */
function functionFunction(str) {
  let result = str;

  return function (newStr) {
    result += result ? `, ${newStr}` : newStr;
    return result;
  };
}

functionFunction('Hello')('world');
