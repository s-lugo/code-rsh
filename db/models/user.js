const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
	name: String,
	achivements: [
		{
			_id: ObjectId,
			achieved: Date,
		},
	],
	matches: [
		{
			score: Number,
			wpm: Number,
			time: Number,
			course: ObjectId,
			opponent: String,
		},
	],
});

module.exports = userSchema;
