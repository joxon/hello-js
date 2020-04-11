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
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  (function dfs(node) {
    if (node === null) return 0;
    else {
      const left = dfs(node.left);
      const right = dfs(node.right);
      diameter = Math.max(diameter, left + right);
      return Math.max(left, right) + 1;
    }
  })(root);
  return diameter;
};
