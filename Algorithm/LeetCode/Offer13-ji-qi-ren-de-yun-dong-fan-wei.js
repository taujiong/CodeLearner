/**
 * https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
 * 中等
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let ans = 0;
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  let dfs = (i, j) => {
    if (!inBound(i, j) || visited[i][j] || getSum(i) + getSum(j) > k) return;
    ans++;
    visited[i][j] = true;
    // 机器人移动方向上可以限制
    dfs(i + 1, j);
    dfs(i, j + 1);
  };

  function getSum(i) {
    return (i + '').split('').reduce((acc, value) => acc + parseInt(value), 0);
  }

  function inBound(i, j) {
    return i >= 0 && i < m && j >= 0 && j < n;
  }

  dfs(0, 0);

  return ans;
};
