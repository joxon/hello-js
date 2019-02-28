// https://www.codewars.com/kata/get-the-middle-character/train/javascript

function getMiddle(s) {
  let len = s.length;
  let mid = len / 2;
  return len % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(mid, mid + 1);
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));
