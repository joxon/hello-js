const str = "sT5?2I7`{6Hi0@hTocH_O,Hi0:_amA32RTrJY|_^C?h^RD1gsw7:ml4Ns?}";
const len = str.length;
let ans = "";
for (let i = 0; i < len; i += 2) {
  ans += str[i];
}
console.log(ans);
