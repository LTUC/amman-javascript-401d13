'use strict';
const LinkedList = require('../linkedList');


class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size); // map is a name
  }

  /**
   * 
   * We are generating a index (the place where our value "bucket") will reside 
   */
  getHash(key) {
    const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size; // 0-10, 0-1024
  }


  set(key, value) {
    const hash = this.getHash(key);

    // we will be using the linked to link values together 
    // whenever we come across a case of having the same
    // hash key

    // entry is our node object
    const entry = { [key]: value };

    // if we have no hash index record on our HashTable
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    // if that hash key already exists in the hashTable, then dont create a new LL but instead chain the new entry to that key by using the LL add method

    this.map[hash].add(entry)

  }

  // if you are using an array or LL to chain your data
  // you will have to do some sort of a traversal
  get(key) {
    const hash = this.getHash(key);

    return this.map[hash].head;
  }
}


module.exports = HashMap;
