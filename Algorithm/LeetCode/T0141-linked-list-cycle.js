import { ListNode } from "../TypeDefinition";

/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 简单，双指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null) return false;

  let fast = head.next, slow = head;
  while (fast != slow) {
    if (fast == null || fast.next == null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
