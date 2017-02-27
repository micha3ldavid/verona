
var home = require('./views/home'),
    vision = require('./views/vision'),
    details = require('./views/details'),
    contact = require('./views/contact'),
    customs = require('./views/customs'),
    terms = require('./views/terms'),
    errors = require('./views/errors');

module.exports = function (express, app) {
    //
    // HOME PAGE
    // ----------------------------------
    home(express, app);
    //
    // VISION PAGE
    // ----------------------------------
    vision(express, app);
    //
    // CONTACT PAGE
    // ----------------------------------
    contact(express, app);
    //
    // TERMS PAGE
    // ----------------------------------
    terms(express, app);
    //
    // DETAILS
    // ----------------------------------
    details(express, app);
    //
    // CUSTOMS PAGE
    // ----------------------------------
    customs(express, app);
    //
    // 404 & 500
    // ----------------------------------
    errors(express, app);
};
