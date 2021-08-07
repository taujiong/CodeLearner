import { Node } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/
 * 中等
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null;

  let dummyNode = new Node(0, head, null),
    node = new Node(head.val, head.next, head.random),
    map = new Map();
  dummyNode.next = node;
  map.set(head, node);

  while (node.next != null) {
    let next = new Node(node.next.val, node.next.next, node.next.random);
    map.set(node.next, next);
    node.next = next;
    node = node.next;
  }

  node = dummyNode.next;
  while (node != null) {
    if (node.random) {
      node.random = map.get(node.random);
    }
    node = node.next;
  }

  return dummyNode.next;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListNB = function (head) {
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
