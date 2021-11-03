'use strict';

module.exports = (req, res, next) => {
    res.status(404).json({
        code: 404,
        route: req.path,
        message: "Page Not Found"
    });
}