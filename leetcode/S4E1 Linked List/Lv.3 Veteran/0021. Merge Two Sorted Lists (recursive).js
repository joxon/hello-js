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
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
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
