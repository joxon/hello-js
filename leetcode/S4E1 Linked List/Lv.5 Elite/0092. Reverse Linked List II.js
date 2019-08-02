/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head || !head.next || m === n) return head

  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy
  let curr = head
  let currIdx = 1
  let nodeM, nodeMNext, nodeN, nodeNPrev
  // find node m
  while (currIdx < m) {
    prev = curr
    curr = curr.next
    ++currIdx
  }
  // currIdx === m
  nodeM = curr
  nodeNPrev = prev
  // move to m+1
  prev = curr
  curr = curr.next
  ++currIdx
  // reverse between m and n
  while (curr && currIdx < n) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
    ++currIdx
  }
  // currIdx === n
  nodeN = curr
  nodeMNext = curr.next
  curr.next = prev
  // reconnect the reversed part
  nodeNPrev.next = nodeN
  nodeM.next = nodeMNext

  return dummy.next
}

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')
const create = require('../createListNode.js')

print(reverseBetween(create([1, 2]), 1, 2))
print(reverseBetween(create([1, 2, 3]), 1, 3))
print(reverseBetween(create([1, 2, 3, 4, 5]), 2, 4))
