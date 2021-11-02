'use strict';

const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');

// before any of the test create a connection
beforeAll(async () => {
  await db.sync();
});

// after all the tests are done
afterAll(async () => {
  await db.drop();
});


describe('Web server', () => {

  // Check if 404 is handled 

  test('Should respond with 404 status on an invalid method', async () => {

    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);

  });


  // test if can create a person

  it('can add a person', async () => {

    const response = await mockRequest.post('/people').send({
      firstName: 'tamim',
      lastName: 'hamoudi'
    });

    expect(response.status).toBe(201);

  });

  // test if can read

  it('can get all people', async () => {

    const response = await mockRequest.get('/people');

    expect(response.status).toBe(200);

  });

  // test if can read one person
  it('can get all record', async () => {

  });

  // test if can update a person
  it('can update a record', async () => {

  });
  // test if can delete a person
  it('can delete a record', async () => {

  });



});