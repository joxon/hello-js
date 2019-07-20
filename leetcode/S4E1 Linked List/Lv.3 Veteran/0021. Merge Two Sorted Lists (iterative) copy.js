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
var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(0)
  let [p1, p2, p3] = [l1, l2, l3]
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p3.next = p1
      p1 = p1.next
    } else {
      p3.next = p2
      p2 = p2.next
    }
    p3 = p3.next
  }
  p3.next = p1 ? p1 : p2
  return l3.next
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
printListNode(mergeTwoLists(headA, headB))
