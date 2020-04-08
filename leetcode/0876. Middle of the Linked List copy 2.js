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
var middleNode = function (head) {
  let len = 0,
    ptr = head;
  while (ptr !== null) {
    ptr = ptr.next;
    ++len;
  }
  const mid = Math.floor(len / 2);

  let i = 0;
  ptr = head;
  while (i < mid) {
    ptr = ptr.next;
    ++i;
  }
  return ptr;
};
