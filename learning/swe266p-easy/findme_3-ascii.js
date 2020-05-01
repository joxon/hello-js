const str = "dt638|I4z`NpnNZ`J`5n`b`i5Oet1nf`S4W4sT4s~";
const len = str.length;
const nums = [];
for (let i = 0; i < len; ++i) {
  nums.push(str.charCodeAt(i) - 1);
}
console.log(String.fromCharCode(...nums));
