import { ListNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 简单
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let slow = head,
    fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
