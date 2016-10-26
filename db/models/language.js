const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
	name: String,
	description: String,
	courses: [
		{
			name: String,
			description: String,
			difficulty: Number,
		},
	],
});

export default languageSchema;
