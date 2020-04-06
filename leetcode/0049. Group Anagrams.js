/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach((str) => {
    const sorted = str.split("").sort().join("");
    const strValues = map.get(sorted);
    if (strValues) {
      strValues.push(str);
      map.set(sorted, strValues);
    } else {
      map.set(sorted, [str]);
    }
  });
  const ans = [];
  for (let v of map.values()) {
    ans.push(v);
  }
  return ans;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
