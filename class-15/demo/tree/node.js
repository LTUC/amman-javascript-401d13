class Node {
  // Default arguments value for left and right
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;