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

export class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode | null} left
   * @param {TreeNode | null} right
   */
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class Employee {
  /**
   * @param {number} id
   * @param {number} importance
   * @param {number[]} subordinates
   */
  constructor(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
  }
}
