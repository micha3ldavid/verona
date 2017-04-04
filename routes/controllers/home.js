
var store = require('../../store');

module.exports = function (express, app) {

	app.get('/', function (req, res) {

		store.pull(['views', 'navigations', 'customs'], function (result) {

			var data = {
				page: result.views.home,
				navigations: result.navigations,
				latest: result.customs.items
			};

			res.render(data.page.view, data);
		});
	});
};
