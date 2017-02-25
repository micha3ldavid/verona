
var fs = require('fs'),
	path = require('path'),
	keys = {
    	navigations: "navigations",
		details: "details"
	};

function error (err, file) {
    return {
        error: err,
		file: file,
		success: false,
		unsuccessful: true,
		data: {}
    };
};

module.exports = {

    get keys () {
        return keys;
    },

    error: function (err, file) {
        return error(err, file);
    },

    pull: function (key, cb) {

        var me = this,
            file = this.keys[key];

        if (file) {

			file += '.json';

            fs.readFile(path.join(__dirname, file), {encoding: 'utf-8'}, function (err, data) {

				if (err) {
					cb(me.error(err, file));
					return;
				}

				cb({
					success: true,
					unsuccessful: false,
					error: undefined,
					file: file,
					data: JSON.parse(data)
				});
		    });

			return;
        }

		cb(me.error(new Error('No such key exists'), key));
    }
};
