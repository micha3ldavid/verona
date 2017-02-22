
var fs = require('fs'),
	path = require('path');

var keys = {
    navigations: "navigations.json",
	details: "details.json"
};

function error (err, file) {
    return {
        error: err,
        message: 'Unable to parse file ' + file
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

            fs.readFile(path.join(__dirname, file), {encoding: 'utf-8'}, function (err, data) {

				if (err) {
					cb(me.error(err, file));
					return;
				}

				cb(JSON.parse(data));
		    });
        }
		else {
			cb(me.error('No key found for ' + key, key));
		}
    }
};
