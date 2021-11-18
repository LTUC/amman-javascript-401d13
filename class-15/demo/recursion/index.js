'use strict';


function callOne() {
  console.log('I am at one');
  callTwo();
  console.log('I am done Two');
}
function callTwo() {
  console.log('I am at two');
  callThree();
  console.log('I am done with three');
}
function callThree() {
  console.log('I am at three');
  callFour();
  console.log('I am done with Four');
}
function callFour() {
  console.log('I am at four');

}

// Debug here
// callOne();


function _hello(num) {
  console.log('Hello Recursion');
  if (num === 1) { // base case
    console.log('reached our base case');
  } else {
    _hello(num -= 1);
  }

}

// Debug here
// _hello(3);