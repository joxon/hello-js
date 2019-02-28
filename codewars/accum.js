// https://www.codewars.com/kata/mumbling/javascript

function accum(s) {
  let r = '';

  for (let i = 1; i <= s.length; ++i) {
    let ch = s[i - 1];

    r += ch.toUpperCase();
    for (let j = 1; j < i; ++j) {
      r += ch.toLowerCase();
    }
    r += '-';
  }

  return r.slice(0, r.length - 1);
}

function accum2(s) {
  return s
    .split('')
    .map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx))
    .join('-');
}

console.log(accum('abcdEFGH'));
console.log(accum2('abcdEFGH'));
