//[用merge sort的逻辑去直接merge链表哦，不要把链表转成数组再排序]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) return head

  const split = (subLen, curr) => {
    const subHeads = []
    for (let i = 0; i < 2; ++i) {
      let tail = null
      subHeads.push(curr)
      for (let j = 0; j < subLen && curr; ++j) {
        tail = curr
        curr = curr.next
      }
      if (tail) tail.next = null
    }
    return [subHeads, curr]
  }

  const merge = (subHeads, prev) => {
    while (subHeads[0] || subHeads[1]) {
      const smaller =
        subHeads[0] && !subHeads[1]
          ? 0
          : !subHeads[0] && subHeads[1]
          ? 1
          : subHeads[0].val <= subHeads[1].val
          ? 0
          : 1
      prev.next = subHeads[smaller]
      prev = prev.next
      subHeads[smaller] = subHeads[smaller].next
    }
    return prev
  }

  const dummy = new ListNode(0)
  dummy.next = head

  let reachedNullAtFirstSpliting = false
  for (let subLen = 1; !reachedNullAtFirstSpliting; subLen *= 2) {
    let isFirstSplit = true
    let prev = dummy
    let curr = dummy.next
    let subHeads
    while (curr) {
      ;[subHeads, curr] = split(subLen, curr)

      if (isFirstSplit) {
        if (curr === null) {
          reachedNullAtFirstSpliting = true
        }
        isFirstSplit = false
      }

      if (subHeads[1]) {
        prev = merge(subHeads, prev)
        prev.next = null
      } else {
        prev.next = subHeads[0]
      }
    }
  }

  return dummy.next
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

print(sortList(create([])))
print(sortList(create([1])))
print(sortList(create([1, 1])))
print(sortList(create([2, 1, 1])))
print(sortList(create([2, 2, 1, 1])))
print(sortList(create([3, 2, 1, 3])))
