/**
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * 简单
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  n = n % s.length;
  if (n === 0) return s;
  let front = s.slice(0, n),
    end = s.slice(n);
  return end + front;
};

/**
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * 简单
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  n = n % s.length;
  if (n === 0) return s;
  let arr = s.split('');
  for (let i = 0; i < n; i++) {
    let char = arr.shift();
    arr.push(char);
  }

  return arr.join('');
};
