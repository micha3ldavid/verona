
var store = require('../../store');

module.exports = function (express, app) {

    app.get('/vision', function (req, res) {

        store.pull(['views', 'navigations', 'vision'], function (result) {

            var data = {
                page: result.views.vision,
                navigations: result.navigations,
                vision: {
                    markdown: result.vision
                }
            };

            res.render(data.page.view, data);
        });
    });
};
