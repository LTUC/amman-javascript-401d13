'use strict';

const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server Testing', () => {

  // test if handles invalid URLs
  test('handle invalid URLS', async () => {
    const response = await request.get('/not-found');
    expect(response.status).toEqual(404);
  });

  // test if the proof of life works
  test('if theres a home route', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('All is good 🥳');

  });

  // test if the /data endpoint works
  test('/data works', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object'); // checking the type of th response 

  });
  // test if the stamper middleware works
  test('stamper middleware works', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(response.body.time).toBeDefined();

  });
});