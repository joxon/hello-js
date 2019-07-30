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
  if (!l1) return l2
  if (!l2) return l1

  const l3 = new ListNode(0)
  let p1 = l1,
    p2 = l2,
    p3 = l3
  let carry = 0
  while (p1 || p2) {
    const sum =
      p1 && p2
        ? p1.val + p2.val + carry
        : p1 && !p2
        ? p1.val + carry
        : !p1 && p2
        ? p2.val + carry
        : null
    carry = sum >= 10 ? 1 : 0
    p3.next = new ListNode(sum >= 10 ? sum - 10 : sum)

    p1 = p1 ? p1.next : null
    p2 = p2 ? p2.next : null
    p3 = p3.next
  }
  if (carry) p3.next = new ListNode(1)

  return l3.next
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

print(addTwoNumbers(create([2, 4, 3]), create([5, 6, 4])))
print(addTwoNumbers(create([]), create([1, 1, 1])))
print(addTwoNumbers(create([9, 9, 9]), create([1])))
