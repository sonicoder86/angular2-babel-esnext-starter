'use strict';
let koa = require('koa');
let staticServe = require('koa-static');
let config = require('./config');

let app = koa();

app.use(staticServe(config.staticPath));

app.listen(config.port);
console.log(`Listening on port ${config.port}`);
