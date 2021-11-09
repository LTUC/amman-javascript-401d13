"use strict";
//this is called carried middleware
module.exports = (capibility) => {
    return (req, res, next) => {
        // ['read', 'create', 'update', 'delete']
        // i gonna check the request ( for example read) if it has this capibility or not
        try {
            // we gonna get the req.user from the next() because we gonna call this middleware after bearer
            // Users.authenticateBearer(bearerHeaderToken).then((userData) => {
            //   req.user = userData;
            //   next();
            // });
            // ['read','create','update','delete']
            if (req.user.capabilities.includes(capibility)) {
                next(); //go to the route handler and
            } else {
                next("Access Denied");
            }
        } catch (e) {
            next("invalid Login!!");
        }
    };
};