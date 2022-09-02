const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const Fingerprint = require('express-fingerprint');
const authorizationMiddleware = require('./middlewares/authorization')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const balancesRouter = require('./routes/balances');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(Fingerprint())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/balances', authorizationMiddleware, balancesRouter)


module.exports = app;
