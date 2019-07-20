/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const getLength = head => {
    let len = 0
    let node = head
    while (node !== null) {
      node = node.next
      ++len
    }
    return len
  }
  const lenA = getLength(headA)
  const lenB = getLength(headB)
  let diff = Math.abs(lenA - lenB)
  const AisLonger = lenA > lenB
  let longer = AisLonger ? headA : headB
  let shorter = AisLonger ? headB : headA

  // align
  while (diff > 0) {
    longer = longer.next
    --diff
  }

  // find intersection node
  while (longer !== shorter) {
    longer = longer.next
    shorter = shorter.next
  }
  return longer
}

const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')

let headA = new ListNode(1)
headA.next = new ListNode(2)
headA.next.next = new ListNode(3)
headA.next.next.next = new ListNode(4)

let headB = new ListNode(2)
headB.next = new ListNode(3)
// headB.next.next = new ListNode(4)

printListNode(headA)
printListNode(headB)
printListNode(getIntersectionNode(headA, headB))
