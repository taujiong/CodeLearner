import { ListNode } from "./TypeDefinition.js";

/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 简单，链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0);
  let currentNode = head;

  while (l1 && l2) {
    if (l1.val >= l2.val) {
      currentNode.next = l2;
      l2 = l2.next;
    } else {
      currentNode.next = l1;
      l1 = l1.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = l1 ?? l2;

  return head.next;
};
