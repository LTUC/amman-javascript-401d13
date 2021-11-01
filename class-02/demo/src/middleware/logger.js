'use strict';

/**
 * This function is only used to console log requests that are of type get
 */
// function logger(req, res, next) {
//   if (req.method === 'GET') {
//     console.log('REQUEST: ', req.method, req.path);
//     // call next so that tha function in the next line can do its work 
//     next();
//   } else {
//     next('The request is not a get request!');
//   }

// }


function logger(req, res, next) {
  console.log('REQUEST: ', req.method, req.path);
  // call next so that tha function in the next line can do its work 
  next();

}

module.exports = logger;