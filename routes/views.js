
var store = require('../store/store');

function pullNavs (cb) {

    store.pull('navigations', function (data) {

        if (data.err) {
            res.render('500', {});
            return;
        }
        cb({navigations: data});
    });
}

module.exports = function (express, app) {

    app.get('/', function (req, res) {

        pullNavs(function (data) {

            data.title = "Home";
            data.page  = '/';

            res.render('index', data);
        });
    });
};
