
var store = require('../store/store');

module.exports = function (express, app) {

    app.get('/', function (req, res) {

        var data = {
            page: '/',
            title: 'Home',
            view: 'index'
        };

        store.pull('navigations', function (navs) {

            if (navs.error) {
                data.view = '500';
            }

            data.navigations = navs.data;

            store.pull('details', function (details) {

                if (details.error) {
                    data.view = '500';
                }

                data.details = details.data;

                res.render(data.view, data);
            });
        });
    });
};
