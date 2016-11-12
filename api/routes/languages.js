const router = require('koa-router')();
const mongoose = require('mongoose');
const languageSchema = require('../../db/models/language');

const Language = mongoose.model('Language', languageSchema);

function simulateLatency(){
    return new Promise((resolve,reject) => setTimeout(resolve,2000));
}

router
    .get('/api/languages', function* () {
        //yield simulateLatency();
        const languages = yield Language.find({}, 'name courses -_id');
        this.response.body = languages;
    })
    .get('/api/languages/:id', function* () {
        const language = yield Language.find({});
        this.body = language;
    });

module.exports = router;