const compose = require('koa-compose');
const userRouter = require('./users.js');
const languageRouter = require('./languages.js');

module.exports = compose([
        languageRouter.routes(),
        languageRouter.allowedMethods(),
        userRouter.routes(),
        userRouter.allowedMethods(),
]);
