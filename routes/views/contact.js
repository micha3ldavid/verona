
var store = require('../../store');

module.exports = function (express, app) {

    app.get('/contact', function (req, res) {

        store.pull(['views', 'navigations', 'contact'], function (result) {

            var data = {
                page: result.views.contact,
                navigations: result.navigations,
                contact: {
                    markdown: result.contact
                }
            };

            res.render(data.page.view, data);
        });
    });
};
