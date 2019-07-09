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
var reverseList = function(head) {
  if (head === null) {
    return null
  } else if (head.next === null) {
    return head
  }

  let prev = head
  let curr = head.next

  while (curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  head.next = null
  return prev
}

function ListNode(val) {
  this.val = val
  this.next = null
}

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

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(5)

printListNode(head)
head = reverseList(head)
printListNode(head)
