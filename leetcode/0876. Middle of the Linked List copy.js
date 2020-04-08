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
  const arr = [];
  while (head !== null) {
    arr.push(head);
    head = head.next;
  }
  return arr[Math.floor(arr.length / 2)];
};
