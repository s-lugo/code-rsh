const bodyParser = require('koa-body');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const router = require('./api/routes/index');
const koa = require('koa');

require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
const app = koa();

app.use(logger());
app.use(bodyParser());
app.use(router);

app.listen(3001);
