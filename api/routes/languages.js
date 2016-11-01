const router = require('koa-router')();
const mongoose = require('mongoose');
const languageSchema = require('../../db/models/language');

const Language = mongoose.model('Language', languageSchema);

router
    .get('/api/languages', function* (){
        const languages = yield Language.find({});
        this.response.body = languages;
    })
    .get('/api/languages/:id', function* (){
        const language = yield Language.find({});
        this.body = language;
    });

module.exports = router;
