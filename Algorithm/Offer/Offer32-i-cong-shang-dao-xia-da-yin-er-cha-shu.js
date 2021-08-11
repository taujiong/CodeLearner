import { TreeNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
 * 中等
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let ans = [],
    queue = [];

  queue.push(root);
  while (queue.length > 0) {
    let node = queue.shift();
    ans.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return ans;
};
