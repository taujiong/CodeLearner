import { TreeNode } from '../TypeDefinition';
/**
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 * 中等
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);

  let rootIndex = inorder.indexOf(root.val);
  root.left = buildTree(
    preorder.slice(1, 1 + rootIndex),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(1 + rootIndex),
    inorder.slice(rootIndex + 1)
  );

  return root;
};
