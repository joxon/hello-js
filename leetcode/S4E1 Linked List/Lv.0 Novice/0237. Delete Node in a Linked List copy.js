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
  node.val = node.next.val
  node.next = node.next.next
}

const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

printListNode(head)
deleteNode(head.next)
printListNode(head)
