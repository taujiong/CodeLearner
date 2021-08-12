import { TreeNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 简单
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function check(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    return (
      node1.val === node2.val &&
      check(node1.left, node2.right) &&
      check(node1.right, node2.left)
    );
  }

  return check(root, root);
};
