const bodyParser = require('koa-body');
const logger = require('koa-logger');
const router = require('./db/routes/routes.js');

require('dotenv').config();

const app = koa();

app.use(logger());
app.use(bodyParser());

app.listen(3001);
