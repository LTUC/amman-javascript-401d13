'use strict';

const Node = require('./Node');


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * OLD APPEND 
   * o(N)
   * A function that will append a node to the end of the linkedList
   * 
   * @param {any} value 
   */
  // append(value) {
  //   // Algorithm
  //   // create a new node
  //   const newNode = new Node(value);

  //   // check if the linked list is empty 
  //   if (!this.head) {
  //     // if empty, point that linked list to be the head of the linked list
  //     this.head = newNode; // make the newly created node our first node in our Linked List
  //     return this; // return the linkedList
  //   }

  //   // if its not empty then you need to find the last node, or the node that the next value is null.
  //   let currentNode = this.head; //this will be our pointer, indicator while we ware traversing through the linked List
  //   // traverse the Linked list and  find the node that the next value of it is null (traversing)
  //   while (currentNode.next) { // while the next node is not empty, make the current node move to th next node
  //     currentNode = currentNode.next;
  //   }
  //   // once found, link that node to the newly created node
  //   currentNode.next = newNode;

  //   // return the LinkedList
  //   return this;
  // }


  /**
   * New append nodes into our linked list using the tail property 
   * 
   * O(1)
   * 
   * @param {any} value
   */
  append(value) {
    if (!this.head) {
      // add the new node into our empty LL
      // and point the head to that new node
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      // need to create the new node
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }
}


module.exports = LinkedList;