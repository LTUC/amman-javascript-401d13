'use strict';

const LinkedList = require('../lib/LinkedList');


describe('Linked list', () => {

  it('creation of linkedList works', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('append to linkedList works', () => {

    let list = new LinkedList();

    list.append('One');

    // check if the first node value is correct
    expect(list.head.value).toEqual('One');

    list.append('Two');

    // just make sure the head remains the same as the first value
    expect(list.head.value).toEqual('One');

    // all cases 

  });


});