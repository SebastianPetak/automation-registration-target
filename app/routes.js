var User = require('./models/User.model');

module.exports = function(app) {
	// REDIRECT / TO /register ===============================
	app.get('/', function(req, res) {
		res.redirect('/register');
	});
	// REGISTER FORM =========================================
	app.get('/register', function(req, res) {
		res.render('register', {
			title: 'Registration'
		});
	});
	// post from registration page
	app.post('/register', function(req, res) {
		if(req.body.email &&
			req.body.password &&
			req.body.birthdayMonth &&
			req.body.gender &&
			req.body.eyeColor) {

			// Check whether checkbox is checked
			var checkbox;
			req.body.checkbox ? checkbox = true : checkbox = false;

			// create object with form input
			var userData = {
				email: req.body.email,
				password: req.body.password,
				birthdayMonth: req.body.birthdayMonth,
				gender: req.body.gender,
				eyeColor: req.body.eyeColor,
				checkBox: checkbox
			};

			// use schema's create method
			// to insert document into mongoose
			User.create(userData).then(function() {
				return res.redirect('/success');
			}).catch(function(err) {
				return res.status(500).send({ error: err });
			});
		} else {
			return res.status(400).send('All fields required');
		}
	});
	app.get('/success', function(req, res) {
		res.render('success', {
			title: 'Success'
		});
	});
};
