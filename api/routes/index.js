const compose = require('koa-compose');
const userRouter = require('./users.js');
const languageRouter = require('./languages.js');

const router = compose([
    userRouter,
    languageRouter,
]);

export default router;