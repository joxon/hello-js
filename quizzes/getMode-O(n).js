/**
 * @param {number[]} nums
 */
function getMode(nums) {
  if (nums === null || nums.length <= 0) return null

  const map = new Map()

  nums.forEach(num => {
    let freq = map.get(num)
    if (freq) {
      map.set(num, freq + 1)
    } else {
      map.set(num, 1)
    }
  })

  const entries = map.entries()
  let mode = null
  let modeFreq = 0
  for (let entry of entries) {
    if (entry[1] > modeFreq) {
      mode = entry[0]
      modeFreq = entry[1]
    }
  }

  return [mode, modeFreq]
}

console.log(getMode([1]))
console.log(getMode([100, 999, 999, 999, 1, 1, 2, 999]))
