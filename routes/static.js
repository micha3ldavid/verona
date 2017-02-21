
module.exports = function (express, app) {

  app.use('/dist', express.static('dist'));
  app.use('/node_modules', express.static('node_modules'));
};
