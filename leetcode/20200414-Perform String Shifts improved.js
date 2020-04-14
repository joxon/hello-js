/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let sum = 0; // + right / - left
  shift.forEach(([direction, amount]) => {
    sum += direction === 1 ? amount : -amount; // 1 right / 0 left
  });

  const len = s.length;
  sum = sum % len; // must be +
  if (sum < 0) sum += len;

  const mid = len - sum;
  return s.slice(mid, len) + s.slice(0, mid);
};

console.log(
  stringShift("abc", [
    [0, 1],
    [1, 2],
  ]) // +1
); // cab

console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ]) // +3
); // efgabcd

console.log(
  stringShift("mecsk", [
    [1, 4],
    [0, 5],
    [0, 4],
    [1, 1],
    [1, 5],
  ]) // +1
); // "kmecs"

console.log(
  stringShift("xqgwkiqpif", [
    [1, 4],
    [0, 7],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 3],
    [0, 1],
    [1, 7],
    [0, 5],
    [0, 6],
  ]) // -6
); // "qpifxqgwki"
