/**
 * https://leetcode-cn.com/problems/brick-wall/
 * 中等，哈希表
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const count = new Map();
  for (let line of wall) {
    let sum = 0;
    for (let i = 0; i < line.length - 1; i++) {
      sum += line[i];

      count.set(sum, (count.get(sum) || 0) + 1);
    }
  }

  let maxUsageCount = 0;
  for (const [_, c] of count.entries()) {
    maxUsageCount = Math.max(maxUsageCount, c);
  }

  return wall.length - maxUsageCount;
};
