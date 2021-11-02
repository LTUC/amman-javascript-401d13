'use strict';
const loggerMiddleware = require('../src/middleware/logger');

// this file is only going ot be used to test out our logger middleware


describe('Logger Middleware', () => {

  // Mock just means make a fake, just an initial

  let consoleSpy;// global variable that will be used to keep an on any operation that is a console log
  let req = {}; // mock req
  let res = {}; // mock res
  let next = jest.fn(); // spy method. mock function


  // this function is executed before every test unit starts
  beforeEach(() => {

    // initialize our testing variable 
    // we are spying on "watching" for any console log from out logger middleware handler
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  // this function is executed after every test unit is done
  afterEach(() => {
    // reset our testing variable
    consoleSpy.mockRestore();
  });


  // check if theres any output
  test('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });



  test('check if properly moved to the next middleware', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

});
