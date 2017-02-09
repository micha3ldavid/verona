
module.exports = function ( express, app ) {
  app.use('/dist', express.static('dist'));
};
