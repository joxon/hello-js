/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const seen = new Set();
  let prev = n,
    next = 0;
  while (true) {
    // get next
    while (prev !== 0) {
      next += (prev % 10) ** 2;
      prev = Math.floor(prev / 10);
    }

    // terminal conditions
    if (next === 1) {
      return true;
    }
    if (seen.has(next)) {
      return false;
    } else {
      seen.add(next);
    }

    // prepare for next iteration
    prev = next;
    next = 0;
  }
};

console.log(isHappy(19));
