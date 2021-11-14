'use strict';

class Stack {

  constructor() {
    this.storage = new Array();
    this.top = null;
  }

  peek() {
    return this.top;
  }

  push(item)  {
    this.storage.unshift(item);
    this.top = item;
  }

  pop() {
    let item = this.storage.shift();
    this.top = this.storage[0];
    return item;
  }
}

module.exports = Stack;