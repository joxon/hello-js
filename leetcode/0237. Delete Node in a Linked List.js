/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Write a function to delete a node
// (except the tail) in a singly linked list,
// !! given only access to that node.
// 不能访问上一个节点

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function(node) {
  let n = node
  while (n.next.next !== null) {
    n.val = n.next.val
    n = n.next
  }
  n.val = n.next.val
  n.next = null
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

console.log(head)
deleteNode(head.next)
console.log(head)
