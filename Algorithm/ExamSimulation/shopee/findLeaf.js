/**
 * 查找二叉搜索树的叶子节点
 * @param {string} str
 */
function findLeaf(str) {
  const arr = str.split(' ').map((k) => parseInt(k));
  if (arr.length === 0) return '';
  const tree = buildTree(arr);
  const leaves = searchLeaf(tree);
  return leaves.join(' ');
}

/**
 * @param {number[]} arr
 */
function buildTree(arr) {
  let root = { value: arr[0] };
  for (let i = 1; i < arr.length; i++) {
    insertNode(root, arr[i]);
  }

  function insertNode(node, value) {
    if (node.value > value) {
      if (node.left) insertNode(node.left, value);
      else node.left = { value };
    } else {
      if (node.right) insertNode(node.right, value);
      else node.right = { value };
    }
  }

  return root;
}

function searchLeaf(tree) {
  let ans = [];
  function dfs(node) {
    if (!node) return;
    if (node.left == null && node.right == null) ans.push(node.value);
    else {
      dfs(node.left);
      dfs(node.right);
    }
  }
  dfs(tree);

  return ans;
}

let ans = findLeaf('9 8 7 10');
console.log(ans);
