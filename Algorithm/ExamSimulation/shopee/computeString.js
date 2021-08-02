/**
 * 生成字符串
 * @param {string} str
 * @return {string}
 */
function computeString(str) {
  return parseGroup(str);
}

/**
 * @param {string} str
 */
function parseGroup(str) {
  let first = str.indexOf('[');
  let last = str.lastIndexOf(']');
  if (first != -1 && last != -1 && first < last) {
    let ans = '';
    let nextGroup = str.substring(first + 1, last);
    let sub = parseGroup(nextGroup);
    let prefix = str.substring(0, first - 1);
    for (let i = 0; i < prefix.length; i++) {
      let num = prefix.substring(i);
      let times = parseInt(num);
      if (!isNaN(times)) {
        for (let j = 0; j < times; j++) {
          ans = ans + sub;
        }
        let p = prefix.substring(0, i);
        return p + ans;
      }
    }
  }
  return str;
}
