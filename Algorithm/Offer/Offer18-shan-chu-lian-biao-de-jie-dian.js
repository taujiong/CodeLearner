import { ListNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * 简单
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head && head.val === val) return head.next;

  let current = head;
  while (current.next && current.next.val != val) {
    current = current.next;
  }
  current.next = current.next.next;

  return head;
};
