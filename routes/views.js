
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

    //
    // HOME
    // ----------------------------------
    app.get('/', function (req, res) {

        pullNavs(function (data) {

            data.title = "Home";
            data.page  = '/';

            res.render('index', data);
        });
    });

    //
    // VISION
    // ----------------------------------
    app.get('/vision', function (req, res) {

        pullNavs(function (data) {

            data.title = "Vision";
            data.page  = '/vision';

            res.render('vision', data);
        });
    });

    //
    // CUSTOMS
    // ----------------------------------
    app.get('/customs', function (req, res) {

        pullNavs(function (data) {

            data.title = "Custums";
            data.page  = '/customs';

            res.render('customs', data);
        });
    });

    //
    // 404
    // ----------------------------------
    app.use(function (req, res, next) {

      pullNavs(function (data) {

          data.title = "400";
          data.page  = '/400';
          res.status(404).render('404', data);
      });
    });

    //
    // 500
    // ----------------------------------
    app.use(function (req, res, next) {

      pullNavs(function (data) {

          data.title = "500";
          data.page  = '/500';
          res.status(500).render('500', data);
      });
    });
};
