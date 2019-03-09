let count = 1

const qsort = (arr, left, right) => {
  console.log(
    `${(count++)
      .toString()
      .padStart(
        3,
        '0'
      )}.             arr = [${arr}], left = ${left}, right = ${right}, ${
      left < right ? 'continue' : 'break'
    }`
  )
  if (left < right) {
    console.log(
      `sorting                [${arr.slice(
        left,
        right + 1
      )}], left = ${left}, right = ${right}`
    )
    let pivotNewIndex = partition(arr, left, right)
    qsort(arr, left, pivotNewIndex - 1)
    qsort(arr, pivotNewIndex + 1, right)
  }
}

const partition = (arr, left, right) => {
  let pivotOldIndex = right
  let pivotValue = arr[right]
  while (left < right) {
    while (left < right && arr[left] <= pivotValue) {
      ++left
    }
    while (left < right && arr[right] >= pivotValue) {
      --right
    }
    // https://hassansin.github.io/Object-Destructuring-and-a-Semicolon
    // https://github.com/prettier/prettier/issues/4193
    if (left < right) {
      console.log(
        `before swapping: arr = [${arr}], see arr[${left}] = ${
          arr[left]
        } and arr[${right}] = ${arr[right]}`
      )
      ;[arr[right], arr[left]] = [arr[left], arr[right]]
      console.log(
        `after swapping:  arr = [${arr}], see arr[${left}] = ${
          arr[left]
        } and arr[${right}] = ${arr[right]}`
      )
    }
  }
  arr[pivotOldIndex] = arr[left]
  arr[left] = pivotValue
  console.log(`final swapping:  arr = [${arr}]`)
  return left
}

let arr = []
const arrLen = 10
const upperBound = 10
const lowerBound = -10
// max arr.length can be 120-125
// limited by the size of call stack?
for (let i = 0; i < arrLen; ++i) {
  arr.push(parseInt(lowerBound + (upperBound - lowerBound) * Math.random()))
}
qsort(arr, 0, arr.length - 1)
console.log(arr)
