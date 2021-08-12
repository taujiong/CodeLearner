import { TreeNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 简单
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;

  const left = invertTree(root.right);
  const right = invertTree(root.left);
  root.left = left;
  root.right = right;

  return root;
};
