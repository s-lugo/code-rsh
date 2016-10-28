import userSchema from './user.js';
import languageSchema from './language.js';
import achievementSchema from './achievement.js';

const mongoose = require('mongoose');

export default {
    user: userSchema,
    language: languageSchema,
    achievement: achievementSchema,
};
