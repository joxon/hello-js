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
var swapPairs = function(head) {
  if (head === null) {
    return null
  } else if (head.next === null) {
    return head
  } else if (head.next.next === null) {
    let newHead = head.next
    newHead.next = head
    head.next = null
    return newHead
  }

  let newHead = head.next
  let prev = head
  while (prev !== null && prev.next !== null) {
    let curr = prev.next
    let nex1 = curr.next
    let nex2 = nex1 === null ? null : nex1.next === null ? nex1 : nex1.next

    curr.next = prev
    prev.next = nex2

    prev = nex1
  }
  return newHead
}

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
printListNode(swapPairs(head))

// case 1
// 1>2>3>4>5>6>null

// 1<2 3>4>5>6>null
// ↓     ↑
// -------

// 1<2 3<4 5>6>null
// ↓   ↓ ↑   ↑
// -----------

// 1<2 3<4 5<6 null
// ↓   ↓ ↑ ↓ ↑ ↑
// -------------

// case 2
// 1>2>3>null

// 1<2 3>null
// ↓     ↑ ×
// -------

// 1<2 3>null
// ↓   ↑ √
// -----
