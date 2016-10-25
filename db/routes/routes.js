const router = require('koa-router')();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

function* languagesList(){
    
}

function* getLanguage(){

}

router
    .get('/api/languages', languagesList)
    .get('/api/languages/:id', getLanguage);

export default router;
