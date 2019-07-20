var getIntersectionNode = function(headA, headB) {
  let a = headA
  let b = headB
  while (a !== b) {
    a = a ? a.next : headB
    b = b ? b.next : headA
  }
  return a
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
