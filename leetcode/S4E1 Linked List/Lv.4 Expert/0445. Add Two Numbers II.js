/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const getLength = head => {
    let len = 0,
      ptr = head
    while (ptr) {
      ++len, (ptr = ptr.next)
    }
    return len
  }
  const len1 = getLength(l1)
  const len2 = getLength(l2)
  const longer = len1 > len2 ? len1 : len2

  const head = new ListNode(0)
  let tail = null,
    carry = 0
  for (let i = 1; i <= longer; ++i) {
    let skip1 = len1 - i
    let p1 = skip1 < 0 ? null : l1
    while (skip1 > 0) {
      p1 = p1.next
      --skip1
    }

    let skip2 = len2 - i
    let p2 = skip2 < 0 ? null : l2
    while (skip2 > 0) {
      p2 = p2.next
      --skip2
    }

    const sum =
      p1 && p2
        ? p1.val + p2.val + carry
        : p1 && !p2
        ? p1.val + carry
        : !p1 && p2
        ? p2.val + carry
        : null
    carry = sum >= 10 ? 1 : 0

    const mid = new ListNode(sum >= 10 ? sum - 10 : sum)
    head.next = mid
    mid.next = tail
    tail = mid
  }
  if (carry) {
    const mid = new ListNode(1)
    head.next = mid
    mid.next = tail
  }
  return head.next
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

print(addTwoNumbers(create([7, 2, 4, 3]), create([5, 6, 4])))
print(addTwoNumbers(create([]), create([1, 1, 1])))
print(addTwoNumbers(create([9, 9, 9]), create([1])))
