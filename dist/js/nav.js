
!(function () {

	function open (btn, menu, body) {

		btn.find('.fa').addClass('fa-close').removeClass('fa-navicon');
		menu.attr('aria-hidden', 'false');
		body.addClass('noflow');
	}

	function close (btn, menu, body) {

		btn.find('.fa').addClass('fa-navicon').removeClass('fa-close');
		menu.attr('aria-hidden', 'true');
		body.removeClass('noflow');
	}

	window.addEventListener('load', function () {

		var body = Mk.$('body'),
			btn  = Mk.$('#btn-nav-mobile'),
			menu = Mk.$('#nav-mobile'),
			hidden;

		btn.on('click', function (e) {

			e.preventDefault();

			hidden = menu.attr('aria-hidden') === 'true';

			if (hidden) {
				open(btn, menu, body);
				return;
			}
			close(btn, menu, body);
		});

		btn.on('blur', function (e) {
			close(btn, menu, body);
		});

		menu.on('mousedown', true, function (e) {
			e.preventDefault();
		});
	});

})();
