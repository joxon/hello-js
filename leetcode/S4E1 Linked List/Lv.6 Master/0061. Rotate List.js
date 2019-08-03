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
var rotateRight = function(head, k) {
  if (!head || !head.next || k === 0) return head

  let len = 0
  for (let node = head; node; ++len, node = node.next);
  let count = k % len
  if (count === 0) return head

  let fast = head
  while (count--) {
    fast = fast.next
  }

  let slow = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  const newHead = slow.next
  slow.next = null
  fast.next = head

  return newHead
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

print(rotateRight(create([1, 2, 3, 4, 5]), 2))
print(rotateRight(create([0, 1, 2]), 4))
print(rotateRight(create([1, 2]), 0))
print(rotateRight(create([1, 2]), 2))
