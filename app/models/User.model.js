var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	birthdayMonth: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	eyeColor: {
		type: String,
		required: true
	},
	checkBox: {
		type: Boolean,
		required: true
	}
});

UserSchema.pre('save', function(next) {
	var user = this;
	bcrypt.hash(user.password, 10).then(function(hash) {
		user.password = hash;
		next();
	}).catch(function(err) {
		return next(err);
	});
});

module.exports = mongoose.model('User', UserSchema);
