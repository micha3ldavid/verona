
var bodyparser = require('body-parser'),
	mailcontent = require('../../views/mail/customs'),
	uuid = require('../../util/uuid'),
	store = require('../../store'),
	mailer = require('nodemailer');

module.exports = function (express, app) {

	app.get('/mail/error', function (req, res) {

		store.pull(['views', 'navigations'], function (result) {

			var data = {
				page: result.views.mailerror,
				navigations: result.navigations
			};
			res.render(data.page.view, data);
		});
	});

	app.get('/mail/sent', function (req, res) {

		store.pull(['views', 'navigations'], function (result) {

			var data = {
				page: result.views.mailsuccess,
				navigations: result.navigations
			};

			res.render(data.page.view, data);
		});
	});

	app.post('/mail', bodyparser.urlencoded({extended: false}), function (req, res) {

		store.pull(['mail'], function (result) {

			var
			config = result.mail.transport,
			transport = mailer.createTransport({
				service: config.service,
				auth: {
					user: config.user,
					pass: config.pass
				}
			}),
			params = {
				firstname: req.body.firstname || '',
				lastname: req.body.lastname || '',
				email: req.body.email || '',
				details: req.body.details || 'No details provided.',
				type: config.customs.params.types[req.body.type] || 'no article type selected.',
				ref1: req.body['reference-1'],
				ref2: req.body['reference-2'],
				id: uuid('CSTM')
			};

			params.ref1 = params.ref1 || params.ref2 || 'No references provided.';
			params.ref2 = params.ref2 !== params.ref1 && params.ref2 || '';

			if (!params.email || req.body.trickery !== 'cR3a7e') {

				transport.close();
				res.redirect('/mail/error');
				return;
			}

			transport.sendMail({
				from: config.customs.from,
				to: params.email,
				subject: config.customs.subject,
				html: mailcontent(params)
			},
			function (err, info) {

				if (err) {
					transport.close();
					res.redirect('/mail/error');
					return;
				}

				transport.sendMail(
					{
						from: config.customs.from,
						to: config.customs.to,
						subject: config.customs.subject + ' ' + params.id,
						html: mailcontent(params)
					},
					function (err, info) {
						transport.close();
						res.redirect(err ? '/mail/error' : '/mail/sent');
					}
				);
			});
		});
	});
};
