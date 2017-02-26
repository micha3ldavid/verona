
var home = require('./views/home'),
    details = require('./views/details'),
    errors = require('./views/errors');

module.exports = function (express, app) {
    //
    // HOME PAGE
    // ----------------------------------
    home(express, app);
    //
    // DETAILS
    // ----------------------------------
    details(express, app);
    //
    // 404 & 500
    // ----------------------------------
    errors(express, app);
};
