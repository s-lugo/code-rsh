const compose = require('koa-compose');
const userRouter = require('./users.js');
const languageRouter = require('./languages.js');

module.exports = function(db){
    return compose([
        languageRouter(db).routes(),
        languageRouter(db).allowedMethods(),
        userRouter(db).routes(),
        userRouter(db).allowedMethods(),
    ]);
};