
var fs		= require('fs'),
	path 	= require('path'),
	marked  = require('marked'),
	map		= require('./map');

//
// simple error handler
// logs the error and returns consistent data with
// useful properties for debugging and statement building
// ----------------------------------------------------

function error (err, file) {

	console.info('STORE ERROR: ', err);

    return {
        error: err,
		file: file,
		success: false,
		unsuccessful: true,
		data: {}
    };
};

//
// successful data object
// returns consistent data structure
// with useful properties for debugging and statement building
// ----------------------------------------------------

function success (data, file) {

	var result = file.json
			? JSON.parse(data)
			: marked(data);

	return {
		error: undefined,
		file: file,
		success: true,
		unsuccessful: false,
		data: result
	};
}

module.exports = {

	pull: function (key, cb) {

		var that = this,
			data = {},
			keys = key.replace(/\s/g, '').split(','),
			len  = keys.length,
			cnt  = 0;

		keys.forEach(function (k) {

			that._pull(k, function (res) {

				cnt++;

				data[k] = res.success && res.data
					|| res.file.json && {}
					|| '';

				if (res.error) {
					data.error = res.error;
				}

				if (cnt === len) {
					cb(data);
				}
			});
		});
	},

    _pull: function (key, cb) {

        var file = map[key] || {}, ppath;

        if (file) {

			ppath = file.path + file.ext;

            fs.readFile(
				path.join(__dirname, ppath),
				{encoding: 'utf-8'},
				function (err, data) {

				if (err) {
					cb(error(err, file));
					return;
				}
				cb(success(data, file));
		    });
			return;
        }

		cb(error(new Error('STORE ERROR: No such key exists for ' + key), file));
    }
};
