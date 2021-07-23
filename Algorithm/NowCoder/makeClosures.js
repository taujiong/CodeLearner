/**
 * https://www.nowcoder.com/practice/578026cd24e3446bbf27fe565473dc26
 * 使用闭包
 * @param {Array} arr
 * @param {Function} fn
 */
function makeClosures(arr, fn) {
  return arr.map((value) => () => fn(value));
}
