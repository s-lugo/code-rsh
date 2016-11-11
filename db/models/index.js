const userSchema = require('./user.js');
const languageSchema = require('./language.js');
const achievementSchema = require('./achievement.js');

const mongoose = require('mongoose');

module.exports = {
    user: userSchema,
    language: languageSchema,
    achievement: achievementSchema,
};
