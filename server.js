'use-strict';

import dotenv from 'dotenv';
import express from 'express';
import { urlencoded, json } from 'body-parser';
import {
  hidePoweredBy,
  frameguard,
  xssFilter,
  noSniff,
} from 'helmet';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname));
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static('public'));

// Security policies
app.use(hidePoweredBy());
app.use(frameguard({ action: 'deny' }));
app.use(xssFilter());
app.use(noSniff());

app.route('/').get(function(req, res) {
  res.sendFile(process.cwd() + '/src/index.html');
});

// Not found middleware
app.use((_req, _res, next) => {
  return next({ status: 404, message: 'not found' });
});

// Error Handling middleware
app.use((err, _req, res, _next) => {
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
  console.log(`Listening to requests on http://localhost:${port}`);
});
