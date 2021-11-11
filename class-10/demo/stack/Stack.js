const Node = require('../lib/Node');


class Stack {

  constructor() {
    this.top = null;
  }

  push(value) {

    if (this.isEmpty()) { // this is to check if our Stack is empty
      // now we create the Stack the first time, it will be empty
      // in that case we will create our new node,
      // and then we will make that node our new Top

      const newNode = new Node(value);
      this.top = newNode;

    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }

  }

  pop() {

    if (this.isEmpty()) {
      console.log('No Nodes are left in your stack');
      return false;
    }

    const temp = this.top; // keep a reference of our top node for removal later
    this.top = this.top.next;
    temp.next = null; // removal of the last added node in the stack
  }

  /**
   * Peek is used to get the last node value that was added to the stack 
   * @returns {any} Node
   */
  peek() {
    if (this.isEmpty()) {
      return ' no Nodes in the stack'
    }
    return this.top.value;
  }

  /**
   * Is Empty is a boolean function that will check for us if the stack is empty or not
   */
  isEmpty() {
    // if (this.top === null) {
    //   return true;
    // } else {
    //   return false;
    // }
    return this.top === null;
  }
}


module.exports = Stack;