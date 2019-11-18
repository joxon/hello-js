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
var deleteDuplicates = function(head) {
  let node = head
  while (node !== null) {
    while (node.next !== null && node.next.val === node.val) {
      let nodeToRemove = node.next
      let nodeToBeNext = node.next.next
      delete nodeToRemove
      node.next = nodeToBeNext
    }
    node = node.next
  }
  return head
}

const ListNode = require('../ListNode.js')
const printListNode = require('../printListNode.js')


let head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(2)

let head2 = new ListNode(1)
head2.next = new ListNode(1)
head2.next.next = new ListNode(1)

// let node = head
// while (node !== null) {
//   console.log(node.val)
//   console.log(node.next)
//   node = node.next
// }

console.log(deleteDuplicates(head))
console.log(deleteDuplicates(head2))
