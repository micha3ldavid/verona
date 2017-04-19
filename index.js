/*

	nohup node my_app.js &
	pkill node

	T: W&GXk/Jt,7#5j}"}
	Mask: a2ls5.a2hosting.com

*/
var express = require('express'),
	middleware = require('./middleware/middleware'),
	routes = require('./routes/route'),
	app = express();

middleware(express, app, __dirname);

routes(express, app);

app.listen(5280, function () {
  console.log('Juliano Loaded on port 5280');
});
