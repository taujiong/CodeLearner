/**
 * https://leetcode-cn.com/problems/redundant-connection/
 * 中等，并查集
 * TODO: 并查集的核心思路是把连通分量设为最终连通的值？
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const nodesCount = edges.length;
  const parent = new Array(nodesCount + 1).fill(0).map((value, index) => index);
  for (let i = 0; i < nodesCount; i++) {
    const [node1, node2] = edges[i];
    if (find(parent, node1) != find(parent, node2)) {
      union(parent, node1, node2);
    } else {
      return edges[i];
    }
  }
  return [0];
};

const union = (parent, index1, index2) => {
  parent[find(parent, index1)] = find(parent, index2);
};

const find = (parent, index) => {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index]);
  }
  return parent[index];
};
