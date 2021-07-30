/**
 * https://www.nowcoder.com/practice/2ded24e34ec34325a62d42d0c8479bae
 * 将字符串转换为驼峰格式
 * @param {string} sName
 * @returns string
 */
function cssStyle2DomStyle(sName) {
  let arr = sName.split('-').filter((name) => name != '');
  if (arr.length === 0) return '';
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]) {
      ans = ans + arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }

  return ans;
}
