
var store = require('../../store');

module.exports = function (express, app) {

    //
    // 404
    // ------------------------------

    app.use(function (req, res) {

        store.pull(['views', 'navigations'], function (result) {

            var data = {
                page: result.views['404'],
                navigations: result.navigations
            };

            res.status(404)
                .render(data.page.view, data);
        });
    });

    //
    // 500
    // ------------------------------

    app.use(function (req, res) {

        store.pull(['views', 'navigations'], function (result) {

            var data = {
                page: result.views['500'],
                navigations: result.navigations
            };

            res.status(500)
                .render(data.page.view, data);
        });
    });
};
