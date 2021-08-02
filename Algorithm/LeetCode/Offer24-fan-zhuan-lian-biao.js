import { ListNode } from '../TypeDefinition';
/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * 简单
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head,
    pre = null;

  while (current) {
    let next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre;
};
