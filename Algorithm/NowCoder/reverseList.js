import { ListNode } from '../TypeDefinition.js';

/**
 * @param {ListNode} pHead
 */
function ReverseList(pHead) {
  let preNode = null;
  let currentNode = pHead;
  let nextNode;
  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = preNode;
    preNode = currentNode;
    currentNode = nextNode;
  }

  return preNode;
}
