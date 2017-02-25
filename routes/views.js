
var home = require('./home'),
    details = require('./details'),
    errors = require('./errors');

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
