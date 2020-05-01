/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.queue = [];
  this.map = new Map();

  if (!nums || nums.length === 0) return;
  else {
    this.queue = [...nums];
    nums.forEach((num) => {
      if (this.map.has(num)) {
        this.map.set(num, this.map.get(num) + 1);
      } else {
        this.map.set(num, 1);
      }
    });
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  for (const num of this.queue) {
    if (this.map.get(num) === 1) {
      return num;
    }
  }
  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  this.queue.push(value);
  if (this.map.has(value)) {
    this.map.set(value, this.map.get(value) + 1);
  } else {
    this.map.set(value, 1);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
