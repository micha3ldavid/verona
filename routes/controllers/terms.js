
var store = require('../../store');

module.exports = function (express, app) {

	app.get('/terms', function (req, res) {

		store.pull(['views', 'navigations', 'terms'], function (result) {

			var data = {
				page: result.views.terms,
				navigations: result.navigations,
				terms: {
					markdown: result.terms
				}
			};

			res.render(data.page.view, data);
		});
	});
};
