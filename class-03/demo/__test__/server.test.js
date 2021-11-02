'use strict';

const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {



  // Check if server is alive

  test('/hello works', async () => {

    const response = await mockRequest.get('/hello');
    expect(response.status).toBe(200);

  });


  // Check if 404 is handled 

  test('Should respond with 404 status on an invalid method', async () => {

    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);

  });


  // Check if general error handling is working

  test('should respond with 500 on an error', async () => {

    const response = await mockRequest.get('/error');
    expect(response.status).toBe(500);

  });

});