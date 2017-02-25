
var store = require('../store/store');

module.exports = function (express, app) {

    app.get('/details/:cat/:key', function (req, res) {

        var p = req.params,
            data = {
                view: '404',
                page: '/details',
                title: '',
                item: null
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
                else {

                    (details.data[p.cat] || []).forEach(function (entry, i) {
                        if (entry.key === p.key) {
                            data.item = entry;
                            data.index = i;
                            return false;
                        }
                    });
                }

                if (data.item) {
                    data.title = data.item.name;
                    data.view  = 'details';
                }

                res.render(data.view, data);
            });
        });
    });
};
