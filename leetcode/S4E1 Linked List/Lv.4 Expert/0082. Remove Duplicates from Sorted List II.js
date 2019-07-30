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
  if (!head || !head.next) return head

  const dummy = new ListNode(0)
  dummy.next = head

  let prev = dummy
  let curr = head
  let val = head.val
  while (curr) {
    let count = 0
    while (curr && curr.val === val) {
      ++count
      curr = curr.next
    }
    if (curr && count > 1) {
      prev.next = curr
      val = curr.val
    } else if (curr && count === 1) {
      prev = prev.next
      val = curr.val
    } else if (!curr && count > 1) {
      prev.next = null
    }
  }

  return dummy.next
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

print(deleteDuplicates(create([1, 1, 1, 2, 3])))
print(deleteDuplicates(create([1, 2, 3, 3, 4, 4, 5])))
print(deleteDuplicates(create([1, 1])))
