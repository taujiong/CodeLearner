/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.valueStack = [];
  this.sortedStack = [Infinity];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.valueStack.push(x);
  this.sortedStack.push(
    Math.min(this.sortedStack[this.sortedStack.length - 1], x)
  );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.valueStack.pop();
  this.sortedStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.valueStack[this.valueStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.sortedStack[this.sortedStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
