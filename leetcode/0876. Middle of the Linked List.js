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

function ListNode(val) {
  this.val = val
  this.next = null
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

function printListNode(head) {
  let node = head
  let s = ''
  while (node !== null) {
    s += node.val + '->'
    console.log(s)
    node = node.next
  }
  s += 'null'
  console.log(s)
}

printListNode(head)
printListNode(middleNode(head))
