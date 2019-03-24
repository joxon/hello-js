// https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39

const compareAscendingly = (a, b) => a < b

const quickSort = (unsortedArray, compare = compareAscendingly) => {
  const sortedArray = [...unsortedArray]

  const recursiveSort = (start, end) => {
    if (start < end) {
      const pivotValue = sortedArray[end]
      let pivotIndex = start
      for (let i = start; i < end; i++) {
        const lessThanThePivot = compare(sortedArray[i], pivotValue)
        if (lessThanThePivot) {
          if (pivotIndex !== i) {
            ;[sortedArray[pivotIndex], sortedArray[i]] = [
              sortedArray[i],
              sortedArray[pivotIndex]
            ]
          }
          pivotIndex++
        }
      }
      sortedArray[end] = sortedArray[pivotIndex]
      sortedArray[pivotIndex] = pivotValue

      recursiveSort(start, pivotIndex - 1)
      recursiveSort(pivotIndex + 1, end)
    }
  }

  recursiveSort(0, unsortedArray.length - 1)
  return sortedArray
}

unsorted = [9, 5, 1, 5, 9, 6]
console.log(quickSort(unsorted))
