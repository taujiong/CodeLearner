/**
 * https://www.nowcoder.com/practice/a93dd26ebb8c425d844acc17bcce9411
 * 移除数组中的元素
 * @param {Array} arr
 * @param {any} item
 */
function removeWithoutCopy(arr, item) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
      len--;
    }
  }

  return arr;
}
