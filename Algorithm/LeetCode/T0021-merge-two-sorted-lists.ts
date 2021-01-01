import { ListNode } from "./TypeDefinition";

/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 简单，链表
 */
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode = new ListNode();
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
