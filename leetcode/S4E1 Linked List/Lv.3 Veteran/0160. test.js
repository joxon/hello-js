const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')

let headA = new ListNode(1)
headA.next = new ListNode(2)
headA.next.next = new ListNode(3)
headA.next.next.next = new ListNode(4)

let headB = new ListNode(2)
headB.next = new ListNode(3)
headB.next.next = new ListNode(4)

printListNode(headA.next)
printListNode(headB)
console.log(headB === headA.next) // false

headA.next = headB

printListNode(headA.next)
printListNode(headB)
console.log(headB === headA.next) // true
