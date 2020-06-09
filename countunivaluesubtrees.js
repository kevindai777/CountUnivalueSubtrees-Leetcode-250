//Objective is to find the number of unique univalue subtrees in a binary tree.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(5)
tree.addLeftNode(tree.root, 1)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 5)
tree.addRightNode(tree.root.right, 5)
tree.addRightNode(tree.root.left, 5)


//O(n) solution that does a dfs of the tree and checks every node and its children for unnique subtrees.

let count = 0

function dfs(node) {
    if (!node) {
        return
    }

    if (isUnival(node, node.val)) {
        count++
    }

    dfs(node.left)
    dfs(node.right)
}
dfs(tree.root)

function isUnival(node, value) {
    if (!node) {
        return true
    }

    if (!node.left && !node.right && node.val === value) {
        return true
    }

    return node.val === value && isUnival(node.left, node.val) && isUnival(node.right, node.val)
}

return count