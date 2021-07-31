/**
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 * 简单
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n <= 1) return 1;

  let p = 1,
    q = 1,
    ans = 0;

  for (let i = 2; i < n; i++) {
    ans = (p + q) % (1e9 + 7);
    p = q;
    q = ans;
  }

  return (p + q) % (1e9 + 7);
};
