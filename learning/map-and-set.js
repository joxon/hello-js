let map = new Map([[1, '1'], [2, '2'], ['3', 3]])

map.set(true, false)
map.set(false, true)
map.set(false, false)

console.log(map)
console.log(map.size)
console.log(map.has(1))
console.log(map.get(1))
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
map.forEach((val, key) => console.log([key, val]))
console.log(...map)

let set = new Set([1, 1, '1', null, true, undefined, Symbol(), { a: 1 }])
set.add(1)
console.log(set)
set.delete(1)
console.log(set)
set.forEach((val, val2) => console.log(val, val2))
console.log(...set)

let wmap = new WeakMap([[{ '1': 1 }, '1'], [{ '2': 2 }, '2']])
console.log(wmap)

let wset = new WeakSet([{}, {}, {}])
console.log(wset)
