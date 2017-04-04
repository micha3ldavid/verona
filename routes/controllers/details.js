
var store = require('../../store');

module.exports = function (express, app) {

	app.get('/details/:category/:key', function (req, res) {

		var category = req.params.category || null,
			key = req.params.key || null,
			data,
			items;

		store.pull(['views', 'navigations', category], function (result) {

			data = {
				page: result.views.details,
				navigations: result.navigations
			};

			if (result.error) {
				data.page = result.views["500"];
			}

			items = (result[category] || {}).items || [];

			items.forEach(function (item, i) {

				if (item.key === key) {
					data.details = item;
					return false;
				}
			});

			if (data.details) {
				data.page.title = data.details.name;
			}
			else {
				data.page = result.views["404"];
			}

			res.render(data.page.view, data);
		});
	});
};
