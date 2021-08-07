import { Node } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 中等
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;

  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next, null);
    node.next = nodeNew;
  }
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = node.next;
    nodeNew.random = node.random !== null ? node.random.next : null;
  }
  const headNew = head.next;
  for (let node = head; node !== null; node = node.next) {
    const nodeNew = node.next;
    node.next = node.next.next;
    nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null;
  }
  return headNew;
};
