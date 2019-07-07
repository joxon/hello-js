/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while (head !== null && head.val === val) {
    let nodeToBeHead = head.next
    head = nodeToBeHead
  }

  let node = head
  while (node !== null) {
    while (node.next !== null && node.next.val === val) {
      let nodeToBeNext = node.next.next
      node.next = nodeToBeNext
    }
    node = node.next
  }

  return head
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let head = new ListNode(2)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(2)
head.next.next.next.next = new ListNode(2)

console.log(head)
head = removeElements(head, 2)
console.log(head)
