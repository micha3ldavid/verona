
var express = require('express'),
	middleware = require('./middleware/middleware'),
	routes = require('./routes/route'),
	app = express();

middleware(express, app, __dirname);

routes(express, app);

app.listen(5280, function () {
  console.log('Verona Loaded on port 5280');
});
