const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
	name: String,
	courses: [
		{
			name: String,
			text: String,
			difficulty: Number,
		},
	],
});

module.exports = languageSchema;
