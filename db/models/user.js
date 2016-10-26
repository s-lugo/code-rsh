const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: String,
	achivements: [
		{
			_id: mongoose.Schema.Types.ObjectId,
			achieved: Date,
		},
	],
	matches: [
		
	],
});

export default userSchema;
