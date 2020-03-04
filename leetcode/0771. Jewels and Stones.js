/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let count = 0;
  const set = new Set();
  J.split("").forEach(jewel => set.add(jewel));
  S.split("").forEach(stone => {
    if (set.has(stone)) ++count;
  });
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
