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
var middleNode = function(head) {
  let fastPtr = head
  let slowPtr = head
  let slowShouldMove = true
  while (fastPtr !== null) {
    fastPtr = fastPtr.next
    slowShouldMove = !slowShouldMove
    slowPtr = slowShouldMove ? slowPtr.next : slowPtr
  }
  return slowPtr
}

const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

printListNode(head)
printListNode(middleNode(head))
