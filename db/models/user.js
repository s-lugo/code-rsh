const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
	name: String,
	achivements: [
		{
			achievement_id: ObjectId,
			achieved: Date,
		},
	],
	matches: [
		{
			score: Number,
			wpm: Number,
			time: Number,
			course_id: ObjectId,
			opponent: String,
		},
	],
	favorites: [
		{
			course_id: ObjectId,
		},
	],
});

module.exports = userSchema;