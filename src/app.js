'use strict';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from '../src/api/api.js';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router);

app.use(notFound);
app.use(errorHandler);

let server;

module.exports = {
  start: (port) => {
    if(! server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server running on', port);
      });
    }
    else {
      console.log('Server is already up');
    }
  },
  stop: () => {
    server.close( () => {
      console.log('Server is closed');
    });
  },
};
