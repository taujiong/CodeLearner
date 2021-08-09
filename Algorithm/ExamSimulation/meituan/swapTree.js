// 交换子树，输出最终的中序遍历结果
let lineArr = read_line().split(' ').map(Number);
const nodeLen = lineArr[0];
const swapCount = lineArr[1];
const root = lineArr[2];

let tree = [[1]];
for (let i = 0; i < nodeLen; i++) {
  let nodes = read_line().split(' ').map(Number);
  tree[i] = [i + 1];
  tree[i].push(nodes[0]);
  tree[i].push(nodes[1]);
}

const swap = read_line().split(' ').map(Number);
for (let i = 0; i < swap.length; i++) {
  let nodeNum = swap[i],
    node = tree[nodeNum - 1];
  let left = node[1],
    right = node[2];
  node[1] = right;
  node[2] = left;
}

function dfs(arr, num) {
  let node = tree[num];
  if (node[1] === 0 && node[2] === 0) {
    arr.push(node[0]);
    return;
  }
  dfs(arr, node[1] - 1);
  arr.push(node[0]);
  dfs(arr, node[2] - 1);
}

let ans = [];
dfs(ans, 0);
print(ans.join(' '));
