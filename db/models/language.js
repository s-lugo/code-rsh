const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    name: String,
    description: String,
});

export default languageSchema;
