/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *

Approach 1: Heap
The idea is to init a heap "the smallest element first",
and add all elements from the array into this heap one by
one keeping the size of the heap always less or equal to k.
That would results in a heap containing k largest elements of the array.
The head of this heap is the answer, i.e. the kth largest element of the array.

Approach 2: Quickselect
This textbook algorthm has O(N)\mathcal{O}(N)O(N) average time complexity.
Like quicksort, it was developed by Tony Hoare, and is also known as Hoare's selection algorithm.
The approach is basically the same as for quicksort.
For simplicity let's notice that kth largest element is the same as N - kth smallest element,
hence one could implement kth smallest algorithm for this problem.
First one chooses a pivot, and defines its position in a sorted array in a linear time.
This could be done with the help of partition algorithm.

    To implement partition one moves along an array,
    compares each element with a pivot,
    and moves all elements smaller than pivot to the left of the pivot.

As an output we have an array where pivot is on its perfect position in the ascending sorted array,
all elements on the left of the pivot are smaller than pivot,
and all elements on the right of the pivot are larger or equal to pivot.

Hence the array is now split into two parts.
If that would be a quicksort algorithm,
one would proceed recursively to use quicksort for the both parts that would result in O(Nlog⁡N)\mathcal{O}(N \log N)O(NlogN) time complexity.
Here there is no need to deal with both parts
since now one knows in which part to search for N - kth smallest element,
and that reduces average time complexity to O(N)\mathcal{O}(N)O(N).

Finally the overall algorithm is quite straightforward :

    Choose a random pivot.

    Use a partition algorithm to place the pivot into its perfect position pos in the sorted array,
    move smaller elements to the left of pivot, and larger or equal ones - to the right.

    Compare pos and N - k to choose the side of array to proceed recursively.

 */
var findKthLargest = function(nums, k) {
  // k = kth largest
  const partition = (left, right) => {
    // take the leftmost number as pivot
    let pivot = nums[left]

    // and put it to the rightmost
    // otherwise it stands in the way
    ;[nums[left], nums[right]] = [nums[right], nums[left]]

    // place smaller numbers to the left
    let pivotIdx = left
    for (let i = left; i <= right; ++i) {
      if (nums[i] < pivot) {
        ;[nums[pivotIdx], nums[i]] = [nums[i], nums[pivotIdx]]
        ++pivotIdx
      }
    }

    // put the pivot to the correct place
    ;[nums[pivotIdx], nums[right]] = [nums[right], nums[pivotIdx]]

    return pivotIdx
  }

  const quickSelectKthSmallest = (left, right, kthSmallest) => {
    if (left === right) {
      return nums[left]
    }

    let pivotIdx = partition(left, right)

    if (kthSmallest === pivotIdx) {
      return nums[pivotIdx]
    } else if (kthSmallest < pivotIdx) {
      return quickSelectKthSmallest(left, pivotIdx - 1, kthSmallest)
    } else {
      return quickSelectKthSmallest(pivotIdx + 1, right, kthSmallest)
    }
  }

  return quickSelectKthSmallest(0, nums.length - 1, nums.length - k)
}

// console.log(findKthLargest([1, 2, 3, 4], 1))
// console.log(findKthLargest([1, 2, 3, 4], 2))
// console.log(findKthLargest([5, 1, 2, 3, 4], 1))
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) // 4
console.log(
  findKthLargest(
    [
      3,
      2,
      3,
      1,
      2,
      4,
      5,
      5,
      6,
      7,
      7,
      8,
      2,
      3,
      1,
      1,
      1,
      10,
      11,
      5,
      6,
      2,
      4,
      7,
      8,
      5,
      6
    ],
    2
  )
) // 10
