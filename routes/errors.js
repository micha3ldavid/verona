
var store = require('../store/store');

module.exports = function (express, app) {

    app.use(function (req, res) {

        var data = {
            title: '400',
            page: '/400'
        };

        store.pull('navigations', function (navs) {
            data.navigations = navs.data;
            res.status(404).render('404', data);
        });
    });

    app.use(function (req, res) {

        var data = {
            title: '500',
            page: '/500'
        };

        store.pull('navigations', function (navs) {
            data.navigations = navs.data;
            res.status(500).render('500', data);
        });
    });
};
