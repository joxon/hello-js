module.exports = function createListNode(array) {
  if (array instanceof Array) {
    const ListNode = require('./ListNode')
    const dummy = new ListNode(0)
    let node = dummy
    array.forEach(value => {
      node.next = new ListNode(value)
      node = node.next
    })
    return dummy.next
  } else {
    return null
  }
}

// const a = createListNode([0])
// const print = require('./printListNode')
// print(a)
