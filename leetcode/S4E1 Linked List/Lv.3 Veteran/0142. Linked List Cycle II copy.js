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
  if (head === null || head.next === null) {
    return null
  }
  const set = new Set()
  let node = head
  while (node !== null && !set.has(node)) {
    set.add(node)
    node = node.next
  }
  return node
}

const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = head

printListNode(head)
printListNode(detectCycle(head))
