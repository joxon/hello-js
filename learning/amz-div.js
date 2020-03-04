// Implement Integer division without using the division operator.

function div(a, b) {
  if (a === 0) {
    return 0;
  }
  if (b === 0) {
    return null;
  }

  const neg = (a > 0 && b < 0) || (a < 0 && b > 0);
  a = Math.abs(a);
  b = Math.abs(b);
  let ans = 0;
  while (a > 0) {
    a -= b;
    if (a < 0) {
      break;
    } else {
      ++ans;
    }
  }

  return neg ? -ans : ans;
}

console.log(div(0, 2));
console.log(div(2, 0));

console.log();
console.log(div(3, 2));
console.log(div(2.1, 2));
console.log(div(2, 2));
console.log(div(1, 2));

console.log();
console.log(div(2, -2));
console.log(div(2, -1));

console.log();
console.log(div(-2, 2));
console.log(div(-2.1, 2));
console.log(div(-3, 2));

console.log();
console.log(div(-2, -2));
console.log(div(-2, -1));
