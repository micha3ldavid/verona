
var store = require('../../store');

module.exports = function (express, app) {

    app.get('/customs', function (req, res) {

        store.pull(['views', 'navigations'], function (result) {

            var data = {
                page: result.views.customs,
                navigations: result.navigations
            };

            res.render(data.page.view, data);
        });
    });
};
