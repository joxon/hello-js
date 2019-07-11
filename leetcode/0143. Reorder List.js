/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head === null || head.next === null || head.next.next === null) {
    return head
  }

  // copy and reverse
  let arrayReversed = []
  let node = head
  while (node !== null) {
    arrayReversed.unshift(node.val)
    node = node.next
  }

  // insert
  const len = arrayReversed.length
  const isEven = len % 2 === 0
  const mid = Math.trunc(len / 2)
  const times = isEven ? mid - 1 : mid
  node = head
  for (let i = 0; i < times; ++i) {
    let next = node.next
    node.next = new ListNode(arrayReversed.shift())
    node.next.next = next
    node = next
  }
  if (isEven) {
    node.next.next = null
  } else {
    node.next = null
  }
}

/**
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
You may not modify the values in the list's nodes, only nodes itself may be changed.
Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
 */

/**
In:
L0→L1→L2→…→Ln-1→Ln,
  ↑  ↑     ↓    ↓
  ↑  -------    ↓
  ---------------
Out:
L0→Ln→L1→Ln-1→L2→Ln-2→…
*/

/**
 * 解法1：两层循环。第一层遍历节点，第二层找到最后一个节点，插入到第一层的中间
 * 解法2：先反转链表然后遍历到中点插入。
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(6)

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

printListNode(head)
reorderList(head)
printListNode(head)
