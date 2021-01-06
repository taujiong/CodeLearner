/**
 * https://leetcode-cn.com/problems/evaluate-division/
 * 中等
 * TODO: 待完善
 * TODO: 查看官方解答
 * TODO:　知识储备，并查集
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const variables = new Set();
  const graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    variables.add(equations[i][0]);
    variables.add(equations[i][1]);

    graph.set(equations[i][0] + " " + equations[i][1], values[i]);
    graph.set(equations[i][1] + " " + equations[i][0], 1.0 / values[i]);
    graph.set(equations[i][0] + " " + equations[i][0], 1.0);
    graph.set(equations[i][1] + " " + equations[i][1], 1.0);
  }

  for (const mid of variables) {
    for (const start of variables) {
      for (const end of variables) {
        if (
          !graph.has(start + " " + end) &&
          graph.has(start + " " + mid) &&
          graph.has(mid + " " + end)
        ) {
          graph.set(
            start + " " + end,
            graph.get(start + " " + mid) * graph.get(mid + " " + end)
          );
        }
      }
    }
  }

  const ret = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    if (variables.has(query[0]) && variables.has(query[1])) {
      ret.push(graph.get(query[0] + " " + query[1]) ?? -1.0);
    } else {
      ret.push(-1.0);
    }
  }

  return ret;
};
