const app = require('express')();

const { runServer } = require('./server/server');

runServer(app);