const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema({
	name: String,
	description: String,
	image: String,
});

export default achievementSchema;
