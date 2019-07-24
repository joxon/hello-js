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
  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next
    slowPtr = slowPtr.next
  }
  return slowPtr
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode')
const head = create([1, 2, 3, 4, 5])

print(head)
print(middleNode(head))
