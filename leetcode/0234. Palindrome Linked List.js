/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) {
    return true
  }

  // copy
  let listCopied = new ListNode(head.val)
  let nodeCopied = listCopied
  let node = head
  while (node.next !== null) {
    nodeCopied.next = new ListNode(node.next.val)
    node = node.next
    nodeCopied = nodeCopied.next
  }

  // reverse
  let prev = head
  let curr = head.next
  while (curr !== null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head.next = null
  let listRev = prev

  // check
  // printListNode(listCopied)
  // printListNode(listRev)
  nodeCopied = listCopied
  let nodeRev = listRev
  while (nodeCopied !== null) {
    if (nodeCopied.val !== nodeRev.val) {
      return false
    }
    nodeRev = nodeRev.next
    nodeCopied = nodeCopied.next
  }
  return true
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
// head.next.next = new ListNode(1)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(5)

console.log(isPalindrome(head))
