'use strict';

const hashMap = require('./hashMap');

const myHash = new hashMap(1024);

myHash.set('mishmish', 'getHash');
myHash.set('boogie', 'boogie');
myHash.set('🍕', '🍕');
myHash.set('nimnim', 'nimnim');
myHash.set('namlah', 'namlah');
myHash.set('🦝', '🦝');
// console.log(typeof myHash);

myHash.map.forEach(ll => {
  // console.log(ll.values());
});


console.log(myHash.get('mishmish'));
// console.log(myHash.get('boogie'));
// console.log(myHash.get('🍕'));

