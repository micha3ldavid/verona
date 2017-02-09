
var statics = require('./static'),
    views = require('./views'),
    errors = require('./errors');

module.exports = function ( express, app ) {

  //
  // load static directories
  // --------------------------
  statics(express, app);

  //
  // load pages
  // ---------------------------
  views(express, app);

  //
  // load errors
  // ---------------------------
  errors(express, app);
};
