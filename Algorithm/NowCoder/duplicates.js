/**
 * https://www.nowcoder.com/practice/871a468deecf453589ea261835d6b78b
 * 查找重复元素
 * @param {Array} arr
 */
function duplicates(arr) {
  let set = new Set();
  let result = [];
  for (let i of arr) {
    if (set.has(i) && !result.includes(i)) {
      result.push(i);
    } else {
      set.add(i);
    }
  }

  return result;
}
