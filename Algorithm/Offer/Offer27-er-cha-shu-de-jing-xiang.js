import { TreeNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 * 简单
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root === null) return null;
  let ans = new TreeNode(root.val);
  ans.left = mirrorTree(root.right);
  ans.right = mirrorTree(root.left);

  return ans;
};
