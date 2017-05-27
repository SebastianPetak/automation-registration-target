var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String
	},
	birthdayMonth: String,
	gender: String,
	radio: String,
	check: Boolean
});

module.exports = mongoose.model('User', UserSchema);
