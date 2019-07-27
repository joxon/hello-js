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
var sortList = function(head) {
  if (head === null || head.next === null) {
    return head
  }

  // split
  // 需要先走一步，原因是，对于偶数长度，mid 可以在一半的地方分割
  let fast = head.next
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  // 获得中点
  const mid = slow.next
  // 截断
  slow.next = null
  let left = sortList(head)
  let right = sortList(mid)

  // merge
  const dummy = new ListNode(0)
  let builder = dummy
  while (left && right) {
    if (left.val < right.val) {
      builder.next = left
      left = left.next
    } else {
      builder.next = right
      right = right.next
    }
    builder = builder.next
  }
  if (left) builder.next = left
  if (right) builder.next = right

  return dummy.next
}
