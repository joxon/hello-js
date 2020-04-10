/**
 * initialize your data structure here.
 */
var MaxStack = function () {
  this.stack = [];
  this.maxStack = [Number.NEGATIVE_INFINITY]; // NOT MIN_VALUE (0.00000...)
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  this.stack.push(x);
  if (x >= this.maxStack[this.maxStack.length - 1]) {
    this.maxStack.push(x);
  }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  const poped = this.stack.pop();
  if (poped === this.maxStack[this.maxStack.length - 1]) {
    this.maxStack.pop();
  }
  return poped;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  return this.maxStack[this.maxStack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  const max = this.peekMax();

  let poped = this.pop();
  const buf = [];
  while (poped !== max) {
    buf.push(poped);
    poped = this.pop();
  }
  while (buf.length !== 0) {
    this.push(buf.pop());
  }

  return max;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

let ms = new MaxStack();
ms.push(3);
ms.push(3);
ms.push(1);
ms.push(2);
ms.push(3);
console.log(ms.peekMax()); // 3
console.log(ms.popMax()); // 3
console.log(ms.popMax()); // 3

ms = new MaxStack();
ms.push(-2);
ms.popMax();
ms.push(-45);
ms.push(-82);
ms.push(29);
ms.pop();
ms.peekMax();
ms.push(40);
ms.pop();
ms.pop();
ms.push(66);
ms.peekMax();
ms.peekMax();
ms.push(-61);
ms.peekMax();
ms.push(98);
ms.peekMax();
