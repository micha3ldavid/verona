
var store = require('../../store');

module.exports = function (express, app) {

	app.get('/customs', function (req, res) {

		store.pull(['views', 'navigations', 'mail', 'customs'], function (result) {

			var data = {
				page: result.views.customs,
				navigations: result.navigations,
				mailer: result.mail.transport.customs,
				latest: result.customs.items
			};

			res.render(data.page.view, data);
		});
	});
};
