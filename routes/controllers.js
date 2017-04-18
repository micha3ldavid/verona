
var home =      require('./controllers/home'),
	vision =    require('./controllers/vision'),
	details =   require('./controllers/details'),
	contact =   require('./controllers/contact'),
	customs =   require('./controllers/customs'),
	terms =     require('./controllers/terms'),
	mail = 		require('./controllers/mail'),
	errors =    require('./controllers/errors');

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
	// MAIL API/PAGES
	// ----------------------------------
	mail(express, app);
	//
	// 404 & 500
	// ----------------------------------
	errors(express, app);
};
