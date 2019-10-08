Array.prototype.radixSort = function() {
  let nums = this.slice(0) // copy
  const max = Math.max(...nums)
  let digit = `${max}`.length
  let radix = 1
  let buckets = []

  while (digit > 0) {
    // O(digit * array.length)
    radix *= 10

    for (let num of nums) {
      const index = num % radix

      !buckets[index] && (buckets[index] = []) // if (buckets[index] === null) { buckets[index] = [] }

      buckets[index].push(num)
    }

    nums = []
    for (let bucket of buckets) {
      bucket && (nums = nums.concat(bucket))
    }

    buckets = []

    --digit
  }

  return nums
}

const arr = [1, 10, 100, 1000, 98, 67, 3, 28, 67, 888, 777]
console.log(arr.radixSort())
