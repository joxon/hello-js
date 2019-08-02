/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || !head.next || k === 1) return head

  const dummy = new ListNode(0)
  dummy.next = head

  let remains = 0
  let prev = dummy,
    curr = head,
    next = head.next
  // get length so the last group won't be reversed
  while (curr) {
    ++remains
    curr = curr.next
  }
  // reverse by group
  while (remains >= k) {
    curr = prev.next
    next = curr.next
    for (let i = 1; i < k; ++i) {
      curr.next = next.next
      next.next = prev.next
      prev.next = next
      next = curr.next
    }
    prev = curr
    remains -= k
  }

  return dummy.next
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

print(reverseKGroup(create([1, 2, 3, 4, 5]), 2))
print(reverseKGroup(create([1, 2, 3, 4, 5]), 3))
print(reverseKGroup(create([1, 2, 3, 4, 5]), 4))
