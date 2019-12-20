/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide2 = function(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  if (divisor === 0) {
    return null;
  } else if (divisor === 1) {
    return dividendl;
  } else if (divisor === -1) {
    return -dividend;
  }

  const neg = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let ans = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    ++ans;
  }

  const MIN = (-2) ** 31;
  const MAX = 2 ** 31 - 1;
  ans = neg ? -ans : ans;
  if (ans < MIN) {
    return MIN;
  } else if (ans > MAX) {
    return MAX;
  } else {
    return ans;
  }
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  var isPositive = true;
  if (dividend > 0 !== divisor > 0) isPositive = false;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  var count = 1,
    result = 0,
    base = divisor;

  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= dividend >> 1) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  if (!isPositive) result = -result;
  return result;
};
/**
 * https://leetcode.com/problems/divide-two-integers/submissions/
 *
    Both dividend and divisor will be 32-bit signed integers.

    The divisor will never be 0.

    Assume we are dealing with an environment
    which could only store integers within the 32-bit signed integer range:
    [−2^31,  2^31 − 1]. For the purpose of this problem,
    assume that your function returns 2^31 − 1 when the division result overflows.
 */
console.log(divide(-2147483648, -1));
console.log(divide(2147483647, 3));
