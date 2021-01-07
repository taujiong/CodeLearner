/**
 * https://leetcode-cn.com/problems/number-of-provinces/
 * 中等，并查集
 * TODO: 知识储备
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const provinces = isConnected.length;
  const visited = new Set();
  let circles = 0;
  const queue = new Array();
  for (let i = 0; i < provinces; i++) {
    if (!visited.has(i)) {
      queue.push(i);
      while (queue.length) {
        const j = queue.shift();
        visited.add(j);
        for (let k = 0; k < provinces; k++) {
          if (isConnected[j][k] === 1 && !visited.has(k)) {
            queue.push(k);
          }
        }
      }
      circles++;
    }
  }
  return circles;
};
