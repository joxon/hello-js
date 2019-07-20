/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fastPtr = head
  for (let i = 0; i < n; ++i) {
    fastPtr = fastPtr.next
  }
  if (fastPtr === null) {
    return head.next
  }

  let slowPtr = head
  while (fastPtr.next !== null) {
    fastPtr = fastPtr.next
    slowPtr = slowPtr.next
  }
  slowPtr.next = slowPtr.next.next
  return head
}

const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

printListNode(removeNthFromEnd(head, 4))
