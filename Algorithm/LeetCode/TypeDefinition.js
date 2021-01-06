export class ListNode {
  /**
   * @param {number} val
   * @param {ListNode | null} next
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {number} val
 * @param {TreeNode | null} left
 * @param {TreeNode | null} right
 */
export class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
