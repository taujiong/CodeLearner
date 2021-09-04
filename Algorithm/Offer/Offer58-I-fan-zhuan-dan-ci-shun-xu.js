/**
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 * 简单
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const reverse = (a) => {
    const swap = (a, i, j) => ([a[i], a[j]] = [a[j], a[i]]);
    let l = 0,
      r = a.length - 1;

    while (l < r) swap(a, l++, r--);

    return a;
  };

  return reverse(s.trim().split(/\s+/)).join(' ');
};
