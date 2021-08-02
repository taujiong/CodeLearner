import { ListNode } from '../TypeDefinition';
/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 简单
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head?.next) {
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  } else return head;
};
