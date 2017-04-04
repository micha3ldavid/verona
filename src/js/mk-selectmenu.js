

window.addEventListener('load', function () {

	Mk.transitions.enable();

	Mk.$('.mk-sm-root').each(function (menu) {
		new Mk.Selectmenu(menu);
	});

}, false);
