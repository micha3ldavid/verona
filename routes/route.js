
var statics = require('./static'),
    views = require('./views');

module.exports = function ( express, app ) {
  //
  // load static directories
  // --------------------------
  statics(express, app);
  //
  // load pages
  // ---------------------------
  views(express, app);
};
