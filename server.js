const koa = require('koa');
const bodyParser = require('koa-body');
const logger = require('koa-logger');

const app = koa();

app.use(logger());
app.use(bodyParser());

app.listen(3001);
