/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [Number.POSITIVE_INFINITY]; // The last elem is always the min
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (x <= this.minStack[this.minStack.length - 1]) {
    // We need <= here
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const poped = this.stack.pop();
  if (poped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const len = this.stack.length;
  if (len === 0) {
    return null;
  } else {
    return this.stack[len - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
