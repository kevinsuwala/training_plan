const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
require('./server/routes/utils')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Default route....',
}));

module.exports = app;
