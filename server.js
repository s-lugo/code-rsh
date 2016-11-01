const bodyParser = require('koa-body');
const logger = require('koa-logger');
const router = require('./api/routes/index.js');
const koa = require('koa');

require('dotenv').config();

const app = koa();

app.use(logger());
app.use(bodyParser());

app.listen(3001);
