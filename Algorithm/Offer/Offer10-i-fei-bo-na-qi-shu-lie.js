/**
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * 简单
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  let p = 0,
    q = 1,
    ans = 0;

  for (let i = 2; i < n; i++) {
    ans = (p + q) % (1e9 + 7);
    p = q;
    q = ans;
  }

  return (p + q) % (1e9 + 7);
};
