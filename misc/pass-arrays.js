const changeArray = (arr1, arr2) => {
  arr1[0] = 'arr1: changed'
  arr2 = ['arr2: changed']
}

let arr1 = ['arr1: unchanged']
let arr2 = ['arr2: unchanged']

changeArray(arr1, arr2)
console.log(arr1, arr2)
