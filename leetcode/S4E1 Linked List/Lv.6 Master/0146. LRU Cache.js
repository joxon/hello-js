/*
https://zhuanlan.zhihu.com/p/34133067

基于 HashMap 和 双向链表 实现 LRU

<1>用队列不行吗？
队列只能做到先进先出，但是重复用到中间的数据时无法把中间的数据移动到顶端。

<2>用单链表不行吗？
单链表能实现新来的放头部，最久不用的在尾部删除。
但删除的时候需要遍历到尾部，因为单链表只有头指针。

在用到已经用到过的数据时，还要遍历整个链表，来确定是否用过，然后再遍历到响应位置来剔除的节点，并重新放在头部。这效率可想而知。

这时hashmap的作用就出来了。他可以在单位1的时间判断value的值是否存在，key直接存储节点对象，
能直接定位删除对应的节点(将比节点的父节点指向子节点)。要通过一个节点直接获得父节点的话，通过单链表是不行的。

这时双向链表的作用也提现出来了。能直接定位到父节点。 这效率就很高了。
而且由于双向链表有尾指针，所以剔除最后的尾节点也十分方便，快捷
*/

function ListNode(key, value, prev, next) {
  this.key = key
  this.value = value
  this.prev = prev
  this.next = next
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.size = 0
  this.head = null
  this.tail = null
  this.map = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return -1
  }

  const node = this.map.get(key)
  const { value, prev, next } = node

  // bridge neighbor nodes
  if (prev) prev.next = next
  if (next) next.prev = prev || next.prev
  if (node === this.tail) this.tail = prev || node

  // node becomes new head
  node.prev = null
  if (node !== this.head) {
    node.next = this.head
    this.head.prev = node
  }
  this.head = node

  return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // node becomes new head
  const node = new ListNode(key, value, null, this.head)
  if (!this.tail) this.tail = node
  if (this.head) this.head.prev = node
  this.head = node
  ++this.size
  // check node exists or not
  if (this.map.has(key)) {
    let oldNode = this.map.get(key)
    if (oldNode.prev) oldNode.prev.next = oldNode.next
    if (oldNode.next) oldNode.next.prev = oldNode.prev
    if (oldNode === this.tail) {
      this.tail = oldNode.prev
      this.tail.next = null
    }
    oldNode = null
    --this.size
  }
  // save node for faster search
  this.map.set(key, node)
  // remove tail if over capacity
  if (this.size > this.capacity) {
    this.map.delete(this.tail.key)
    this.tail = this.tail.prev
    this.tail.next = null
    --this.size
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache, functionNames, parameters, expectations

function test() {
  let testOK = true
  let log = ''
  const len = functionNames.length
  for (let i = 0; i < len; ++i) {
    const func = functionNames[i]
    const para = parameters[i]
    const expected = expectations[i]
    let result = null
    if (func === 'put') {
      cache.put(para[0], para[1])
      result = null
    } else if (func === 'get') {
      result = cache.get(para[0])
    } else if (func === 'LRUCache') {
      cache = new LRUCache(para[0])
      result = null
    }

    log += [func, para, result, expected].toString() + '\n'
    if (result != expected) {
      testOK = false
      log += `cache.get(${para[0]}): expected ${expected} but got ${result}\n`
    }
  }
  console.log(testOK ? 'All tests passed!' : 'Test failed! Log:\n' + log)
}

functionNames = ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get', 'get']
parameters = [[2], [1, 1], [2, 2], [3, 3], [4, 4], [1], [2], [3]]
expectations = [null, null, null, null, null, -1, -1, 3]
test()

// cache = new LRUCache(2 /* capacity */)
// cache.put(1, 1)
// cache.put(2, 2)
// cache.get(1) // returns 1
// cache.put(3, 3) // evicts key 2
// cache.get(2) // returns -1 (not found)
// cache.put(4, 4) // evicts key 1
// cache.get(1) // returns -1 (not found)
// cache.get(3) // returns 3
// cache.get(4) // returns 4

functionNames = ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get']
parameters = [[2], [2, 1], [1, 1], [2, 3], [4, 1], [1], [2]]
expectations = [null, null, null, null, null, -1, 3]
test()

// cache = new LRUCache(2 /* capacity */)
// cache.put(2, 1)
// cache.put(1, 1)
// cache.put(2, 3)
// cache.put(4, 1)
// cache.get(1)
// cache.get(2)

functionNames = [
  'LRUCache',
  'put',
  'put',
  'put',
  'put',
  'put',
  'get',
  'put',
  'get',
  'get',
  'put',
  'get',
  'put',
  'put',
  'put',
  'get',
  'put',
  'get',
  'get',
  'get',
  'get',
  'put',
  'put',
  'get',
  'get',
  'get',
  'put',
  'put',
  'get',
  'put',
  'get',
  'put',
  'get',
  'get',
  'get',
  'put',
  'put',
  'put',
  'get',
  'put',
  'get',
  'get',
  'put',
  'put',
  'get',
  'put',
  'put',
  'put',
  'put',
  'get',
  'put',
  'put',
  'get',
  'put',
  'put',
  'get',
  'put',
  'put',
  'put',
  'put',
  'put',
  'get',
  'put',
  'put',
  'get',
  'put',
  'get',
  'get',
  'get',
  'put',
  'get',
  'get',
  'put',
  'put',
  'put',
  'put',
  'get',
  'put',
  'put',
  'put',
  'put',
  'get',
  'get',
  'get',
  'put',
  'put',
  'put',
  'get',
  'put',
  'put',
  'put',
  'get',
  'put',
  'put',
  'put',
  'get',
  'get',
  'get',
  'put',
  'put',
  'put',
  'put',
  'get',
  'put',
  'put',
  'put',
  'put',
  'put',
  'put',
  'put'
]
parameters = [
  [10],
  [10, 13],
  [3, 17],
  [6, 11],
  [10, 5],
  [9, 10],
  [13],
  [2, 19],
  [2],
  [3],
  [5, 25],
  [8],
  [9, 22],
  [5, 5],
  [1, 30],
  [11],
  [9, 12],
  [7],
  [5],
  [8],
  [9],
  [4, 30],
  [9, 3],
  [9],
  [10],
  [10],
  [6, 14],
  [3, 1],
  [3],
  [10, 11],
  [8],
  [2, 14],
  [1],
  [5],
  [4],
  [11, 4],
  [12, 24],
  [5, 18],
  [13],
  [7, 23],
  [8],
  [12],
  [3, 27],
  [2, 12],
  [5],
  [2, 9],
  [13, 4],
  [8, 18],
  [1, 7],
  [6],
  [9, 29],
  [8, 21],
  [5],
  [6, 30],
  [1, 12],
  [10],
  [4, 15],
  [7, 22],
  [11, 26],
  [8, 17],
  [9, 29],
  [5],
  [3, 4],
  [11, 30],
  [12],
  [4, 29],
  [3],
  [9],
  [6],
  [3, 4],
  [1],
  [10],
  [3, 29],
  [10, 28],
  [1, 20],
  [11, 13],
  [3],
  [3, 12],
  [3, 8],
  [10, 9],
  [3, 26],
  [8],
  [7],
  [5],
  [13, 17],
  [2, 27],
  [11, 15],
  [12],
  [9, 19],
  [2, 15],
  [3, 16],
  [1],
  [12, 17],
  [9, 1],
  [6, 19],
  [4],
  [5],
  [5],
  [8, 1],
  [11, 7],
  [5, 2],
  [9, 28],
  [1],
  [2, 2],
  [7, 4],
  [4, 22],
  [7, 24],
  [9, 26],
  [13, 28],
  [11, 26]
]
expectations = [
  null,
  null,
  null,
  null,
  null,
  null,
  -1,
  null,
  19,
  17,
  null,
  -1,
  null,
  null,
  null,
  -1,
  null,
  -1,
  5,
  -1,
  12,
  null,
  null,
  3,
  5,
  5,
  null,
  null,
  1,
  null,
  -1,
  null,
  30,
  5,
  30,
  null,
  null,
  null,
  -1,
  null,
  -1,
  24,
  null,
  null,
  18,
  null,
  null,
  null,
  null,
  -1,
  null,
  null,
  18,
  null,
  null,
  -1,
  null,
  null,
  null,
  null,
  null,
  18,
  null,
  null,
  -1,
  null,
  4,
  29,
  30,
  null,
  12,
  -1,
  null,
  null,
  null,
  null,
  29,
  null,
  null,
  null,
  null,
  17,
  22,
  18,
  null,
  null,
  null,
  -1,
  null,
  null,
  null,
  20,
  null,
  null,
  null,
  -1,
  18,
  18,
  null,
  null,
  null,
  null,
  20,
  null,
  null,
  null,
  null,
  null,
  null,
  null
]
test()
