'use-strict';

const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { urlencoded, json } = require('body-parser');
const { hidePoweredBy, frameguard, xssFilter, noSniff } = require('helmet');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname));
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static('dist'));

// Security policies
app.use(hidePoweredBy());
app.use(frameguard({ action: 'deny' }));
app.use(xssFilter());
app.use(noSniff());

app.route('/').get(function(req, res) {
  res.sendFile(process.cwd() + '/dist/index.html');
});

// Not found middleware
app.use((_req, _res, next) => {
  return next({ status: 404, message: 'not found' });
});

// Error Handling middleware
app.use((err, _req, res) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || 'Internal Server Error';
  }
  res
    .status(errCode)
    .type('txt')
    .send(errMessage);
});

app.listen(port, function() {
  // eslint-disable-next-line no-console
  console.log(`Listening to requests on http://localhost:${port}`);
});
