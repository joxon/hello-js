module.exports = function printListNode(head, max = 10) {
  let node = head
  let s = ''
  while (node !== null && max > 0) {
    s += node.val + '->'
    node = node.next
    --max
  }
  s += max > 0 ? 'null' : '...'
  console.log(s)
}
