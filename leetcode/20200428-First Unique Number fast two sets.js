/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.uniques = new Set();
  this.duplicates = new Set();
  nums.forEach((n) => this.add(n));
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  if (this.uniques.size == 0) return -1;
  return this.uniques.values().next().value;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (n) {
  if (this.duplicates.has(n)) {
    return;
  } else if (!this.uniques.has(n)) {
    this.uniques.add(n);
  } else if (this.uniques.has(n) && !this.duplicates.has(n)) {
    this.uniques.delete(n);
    this.duplicates.add(n);
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
