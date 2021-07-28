/**
 * https://www.nowcoder.com/practice/0b5ae9c4a8c546f79e2547c0179bfdc2
 */
Array.prototype.uniq = function () {
  return Array.from(new Set(this));
};
