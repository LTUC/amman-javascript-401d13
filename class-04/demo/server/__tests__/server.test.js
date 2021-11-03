'use strict';
const server = require('../server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    beforeEach(()=> {
        jest.spyOn(console, 'log').mockImplementation();
    })

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });

    //  1. callbacks ---> Promises (Promise.then() ) ----> Async/Await
    
    it('handles my internal server errors', async () => {
        const response = await request.post('/bad'); // async
        expect(response.status).toEqual(500);
    });
    
    it('get data from /data ', async () => {
        const response = await request.get('/data'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });
    
    it('/ route works', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('this is home page!!! :D :D :D');
    });


});