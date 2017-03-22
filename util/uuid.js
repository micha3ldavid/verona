
module.exports = function (key) {

    var r,
    uuid = 'xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c) {
        r = Math.random() * 16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });

    return ((key ? key + '-' : '') + uuid).toUpperCase();
};
