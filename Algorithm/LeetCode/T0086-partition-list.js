import {ListNode} from './TypeDefinition.js';

/**
 * https://leetcode-cn.com/problems/partition-list/
 * 中等，链表
 * TODO: 复习
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let prev = new ListNode(0);
  const prevHead = prev;
  let post = new ListNode(0);
  const postHead = post;

  while (head !== null) {
    if (head.val < x) {
      prev.next = head;
      prev = prev.next;
    } else {
      post.next = head;
      post = post.next;
    }

    head = head.next;
  }

  post.next = null;
  prev.next = postHead.next;

  return prevHead.next;
};
