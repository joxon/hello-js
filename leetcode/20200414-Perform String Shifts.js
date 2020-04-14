/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let finalShift = 0;
  shift.forEach(([direction, amount]) => {
    finalShift += direction === 1 ? amount : -amount; // 1 right / 0 left
  });
  const strlen = s.length;
  finalShift = finalShift % strlen;
  if (finalShift > 0) {
    while (finalShift > 0) {
      s = s[strlen - 1] + s.slice(0, strlen - 1);
      --finalShift;
    }
  } else if (finalShift < 0) {
    while (finalShift < 0) {
      s = s.slice(1, strlen) + s[0];
      ++finalShift;
    }
  }
  return s;
};

console.log(
  stringShift("abc", [
    [0, 1],
    [1, 2],
  ])
);

console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
);
