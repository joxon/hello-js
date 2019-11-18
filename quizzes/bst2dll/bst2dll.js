// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

/**
 * TuSimple: Binary Search Tree to Doubly Linked List
 *
Sample Input 0
5 -1 -1
2 -1 -1
4 5 2

Sample Output 0
5 4 2

Sample Input 1
3 1 2
7 -1 -1
8 -1 -1
1 -1 7
2 8 -1

Sample Output 1
1 7 3 8 2

Sample Input 2
5 2 8
2 1 3
8 6 -1
1 -1 -1
3 -1 4
6 -1 7
4 -1 -1
7 -1 -1

Sample Output 2
1 2 3 4 5 6 7 8
 */

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const nodeMap = new Map();
const rootMap = new Map();

const fs = require("fs");
const lines = fs.readFileSync("quizzes/bst2dll/test.in", "utf8").split("\n");
lines.forEach(line => {
  if (line.length > 0) {
    const nums = line.split(" ");

    const val = parseInt(nums[0]);

    const leftVal = parseInt(nums[1]);
    const leftNode = leftVal === -1 ? null : new TreeNode(leftVal, null, null);

    const rightVal = parseInt(nums[2]);
    const rightNode =
      rightVal === -1 ? null : new TreeNode(rightVal, null, null);

    const node = new TreeNode(val, leftNode, rightNode);
    nodeMap.set(val, node);
    rootMap.set(val, true);
  }
});

for (let entry of nodeMap.entries()) {
  const key = entry[0];
  const node = entry[1];

  if (node.left !== null) {
    rootMap.set(node.left.val, false);
    node.left = nodeMap.get(node.left.val);
  }

  if (node.right !== null) {
    rootMap.set(node.right.val, false);
    node.right = nodeMap.get(node.right.val);
  }
}

let rootVal;
let rootNode;
for (let entry of rootMap.entries()) {
  if (entry[1] === true) {
    rootVal = entry[0];
    rootNode = nodeMap.get(rootVal);
    break;
  }
}
// console.log(rootVal);
// console.log(rootNode);

let result = "";
const inOrderTraverse = root => {
  if (root === null) {
    return;
  }

  inOrderTraverse(root.left);
  result += root.val + " ";
  inOrderTraverse(root.right);
};
inOrderTraverse(rootNode);
console.log(result);
