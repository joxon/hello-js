/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
  const len = arr.length;
  return (function dfs(root, arr, index) {
    if (root === null || index === len) return false;

    if (
      root.left === null &&
      root.right === null &&
      root.val === arr[index] &&
      index === len - 1
    )
      return true;

    return (
      root.val === arr[index] &&
      (dfs(root.left, arr, index + 1) || dfs(root.right, arr, index + 1))
    );
  })(root, arr, 0);
};
