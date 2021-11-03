'use strict';

const logger = (req, res, next) => {
    console.log('REQUEST:', req.method, req.path);

    // call next so that the next funtion in line can do its work
    next();
}

module.exports = logger;