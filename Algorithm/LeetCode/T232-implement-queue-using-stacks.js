/**
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/
 * 简单
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  var length = this.inStack.length;
  if (length === 0) {
    return this.outStack.pop();
  } else if (length === 1) {
    return this.inStack.pop();
  } else {
    while (length > 1) {
      this.outStack.push(this.inStack.pop());
      length--;
    }
    return this.inStack.pop();
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  var length = this.inStack.length;
  if (length === 0) {
    return this.outStack[-1];
  } else if (length === 1) {
    return this.inStack[0];
  } else {
    while (length > 1) {
      this.outStack.push(this.inStack.pop());
      length--;
    }
    return this.inStack[0];
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
