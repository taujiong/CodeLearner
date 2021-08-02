/**
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 简单
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (head == null) return [];
  let ans = [];
  if (head.next) ans = reversePrint(head.next);
  return ans.concat(head.val);
};
