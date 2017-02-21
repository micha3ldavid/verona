
window.addEventListener('load', function () {

    var btn = Mk.$('#btn-mobilenav'),
        menu = Mk.$('#menu-mobilenav'),
        hidden;

    btn.on('click', function (e) {

        e.preventDefault();

        hidden = menu.attr('aria-hidden');
        menu.attr('aria-hidden', hidden === 'true' ? 'false' : 'true');
    });

    btn.on('blur', true, function (e) {

        var el = Mk.$(e.relatedTarget);

        if (el.parent('#menu-mobilenav').length < 1) {
            menu.attr('aria-hidden', 'true');
        }
    });
});
