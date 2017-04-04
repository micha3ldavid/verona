
var statics = require('./static'),
	controllers = require('./controllers');

module.exports = function ( express, app ) {
  statics(express, app);
  controllers(express, app);
};
