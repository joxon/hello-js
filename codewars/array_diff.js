// https://www.codewars.com/kata/array-dot-diff/train/javascript

function array_diff(a, b) {
  let c = [];
  a.forEach(num => {
    if (!b.includes(num)) {
      c.push(num);
    }
  });
  return c;
}

function array_diff2(a, b) {
  return a.filter(num => !b.includes(num));
}
