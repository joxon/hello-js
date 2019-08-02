/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null
  this.length = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || this.length <= index) return -1
  let node = this.head
  for (let i = 0; i < index && node; ++i, node = node.next);
  return node ? node.val : -1
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const newHead = new ListNode(val)
  newHead.next = this.head
  this.head = newHead
  ++this.length
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = this.head
  while (node.next) node = node.next
  node.next = new ListNode(val)
  ++this.length
}

/**
 * Add a node of value val before the index-th node in the linked list.
 * If index equals to the length of linked list, the node will be appended to the end of linked list.
 * If index is greater than the length, the node will not be inserted.
 * If index is negative, the node will be inserted at the head of the list.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (this.length < index) {
    return
  }
  if (index <= 0) {
    this.addAtHead(val)
    return
  }
  let node = this.head
  for (let i = 1; i < index && node; ++i, node = node.next);
  if (node) {
    const newNode = new ListNode(val)
    newNode.next = node.next
    node.next = newNode
    ++this.length
  }
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || this.length <= index) {
    return
  }
  if (index === 0) {
    this.head = this.head.next
    return
  }
  let node = this.head
  for (let i = 1; i < index && node; ++i, node = node.next);
  node.next = node.next.next
  --this.length
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const ListNode = require('../ListNode.js')
const print = require('../printListNode.js')

let list = new MyLinkedList()
console.log(list.get(0))
list.addAtHead(0)
print(list.head)
list.addAtTail(2)
print(list.head)
list.addAtIndex(1, 1)
print(list.head)
list.deleteAtIndex(2)
print(list.head)

list = new MyLinkedList()
print(list.head)
list.addAtIndex(-1, 0)
print(list.head)
list.get(0) // 0
print(list.head)
list.deleteAtIndex(-1)
print(list.head)
