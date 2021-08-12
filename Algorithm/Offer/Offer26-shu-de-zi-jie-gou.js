import { TreeNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 * 中等
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A === null || B === null) return false;

  function check(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (!node1 || !node2 || node1.val != node2.val) return false;
    if (!node2.left || check(node1.left, node2.left)) {
      if (!node2.right || check(node1.right, node2.right)) return true;
    }
    return false;
  }

  let queue = [];
  queue.push(A);
  while (queue.length > 0) {
    let node = queue.shift();
    if (check(node, B)) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return false;
};
