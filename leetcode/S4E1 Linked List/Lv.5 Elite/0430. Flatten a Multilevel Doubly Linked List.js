// Input:
//  1---2---3---4---5---6--NULL
//          |
//          7---8---9---10--NULL
//              |
//              11--12--NULL

// Output:
// 1-2-3-7-8-11-12-9-10-4-5-6-NULL

// 有点像DFS

// Definition for a Node.
// function Node(val, prev, next, child) {
//   this.val = val
//   this.prev = prev
//   this.next = next
//   this.child = child
// }
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) {
    return head
  }

  ;(function findChildTail(head) {
    let node = head
    while (node.next || node.child) {
      if (node.child) {
        let childTail = findChildTail(node.child)

        if (node.next) {
          childTail.next = node.next
          node.next.prev = childTail
        }

        node.next = node.child
        node.child.prev = node

        node.child = null
      }
      node = node.next
    }
    return node
  })(head)

  return head
}

// Input:
//  1-2-3-null
//  |
//  4-5-null
//  |
//  6-7-null

// Output:
// 1-4-6-7-5-2-3-null

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

let head, head2, head3

head = create([1, 2, 3])
head2 = create([4, 5])
head3 = create([6, 7])
head.child = head2
head2.child = head3
print(head)
print(flatten(head))

head = create([1])
head2 = create([2])
head3 = create([3])
head.child = head2
head2.child = head3
print(head)
print(flatten(head))
