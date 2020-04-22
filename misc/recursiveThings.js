const print = (list) => {
  if (list.length === 0) return;
  const [first, ...rest] = list;
  console.log(first);
  print(rest);
};

print([1, 2, 3]);

const check = (list, target) => {
  if (list.length === 0) return false;
  const [first, ...rest] = list;
  if (first === target) return true;
  return check(rest, target);
};

console.log(check([1, 2, 3], 3)); // true
console.log(check([1, 2, 3], 4)); // false
