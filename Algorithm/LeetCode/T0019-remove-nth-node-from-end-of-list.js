import { ListNode } from "./TypeDefinition.js";

/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 中等，快慢指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  let fast = dummyNode, slow = dummyNode;

  while (n--) {
    fast = fast.next;
  }

  while (fast?.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummyNode.next;
};
