// 数组+单链表=哈希表
// 哈希函数产生键的索引值，通过数组快速访问
// 单链表可以解决哈希函数冲突的问题

function Node(key, value) {
  this.key = key
  this.value = value
  this.next = null
}
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.array = []
  this.max = 10000
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  const index = key % this.max // hashing
  if (!this.array[index]) {
    this.array[index] = new Node(key, value)
  } else {
    let node = this.array[index]
    // search for node with param key
    while (node.next && node.key !== key) node = node.next
    // if exists, update the value
    if (node.key === key) node.value = value
    // if not exists, append a new node
    if (!node.next && node.key !== key) node.next = new Node(key, value)
  }
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const index = key % this.max // hashing
  if (this.array[index]) {
    let node = this.array[index]
    // search for node with param key
    while (node.next && node.key !== key) node = node.next
    // if exists, return the value
    if (node.key === key) return node.value
    // if not exists, return -1
  }
  return -1
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const index = key % this.max // hashing
  if (this.array[index]) {
    let node = this.array[index]
    // if head has the key
    if (node.key === key) {
      this.array[index] = node.next
      return
    }
    // search for node with param key
    while (node.next && node.next.key !== key) node = node.next
    // if exists, remove the value
    if (node.next && node.next.key === key) node.next = node.next.next
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

let hashMap = new MyHashMap()
hashMap.put(1, 1)
hashMap.put(2, 2)
hashMap.get(1) // returns 1
hashMap.get(3) // returns -1 (not found)
hashMap.put(2, 1) // update the existing value
hashMap.get(2) // returns 1
hashMap.remove(2) // remove the mapping for 2
hashMap.get(2) // returns -1 (not found)
