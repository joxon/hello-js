/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root == null) {
    return true;
  }

  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

function height(root) {
  // An empty tree has height -1
  if (root == null) {
    return -1;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}
