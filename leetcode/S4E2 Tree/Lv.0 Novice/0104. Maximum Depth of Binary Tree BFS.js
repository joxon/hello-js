/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0

  let depth = 0
  const stack = []
  stack.unshift(root)
  while (stack.length > 0) {
    ++depth
    let nodeCount = stack.length
    while (nodeCount--) {
      let node = stack.pop()
      if (node.left) stack.unshift(node.left)
      if (node.right) stack.unshift(node.right)
    }
  }
  return depth
}

const TreeNode = require('../TreeNode')

let root = new TreeNode()
console.log(maxDepth(root))
root.left = new TreeNode()
console.log(maxDepth(root))
