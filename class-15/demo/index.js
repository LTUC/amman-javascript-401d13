'use strict';

const BinaryTree = require('./tree/tree');
const Node = require('./tree/node');

const BT = new BinaryTree();

BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));

console.log(BT.PreOrder());