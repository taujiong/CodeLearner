import { ListNode } from '../TypeDefinition';

/**
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
 * 简单
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let dummyNode = new ListNode(),
    currentNode = dummyNode;

  while (l1 != null && l2 != null) {
    if (l1.val > l2.val) {
      currentNode.next = l2;
      l2 = l2.next;
    } else {
      currentNode.next = l1;
      l1 = l1.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = l1 === null ? l2 : l1;

  return dummyNode.next;
};
