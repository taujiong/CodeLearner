import { TreeNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
 * 中等
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let ans = [],
    queue = [],
    isOddLine = true;

  queue.push(root);
  while (queue.length > 0) {
    let temp = [];
    let currentLen = queue.length;
    for (let i = 0; i < currentLen; i++) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    let line = isOddLine ? temp.slice() : temp.reverse();
    isOddLine = !isOddLine;
    ans.push(line);
  }

  return ans;
};
