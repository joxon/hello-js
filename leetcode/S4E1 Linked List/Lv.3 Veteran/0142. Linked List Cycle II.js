// https://en.wikipedia.org/wiki/Cycle_detection
// Floyd's Tortoise and Hare

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
var detectCycle = function(head) {
  if (head === null) {
    return null
  }
  let slow = head
  let fast = head.next
  while (fast && fast.next && fast !== slow) {
    slow = slow.next
    fast = fast.next.next
  }
  if (fast === slow) {
    slow = slow.next
    while (slow !== head) {
      head = head.next
      slow = slow.next
    }
    return slow
  } else {
    return null
  }
}

const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = head.next

printListNode(head, 5)
printListNode(detectCycle(head))
