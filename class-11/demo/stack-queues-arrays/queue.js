'use strict';

class Queue {

  constructor() {
    this.storage = new Array();
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift();
  }
  
  peek() {
    return this.storage[0];
  }

}

module.exports = Queue;
