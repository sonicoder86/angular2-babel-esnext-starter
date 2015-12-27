'use strict';

let koa = require('koa');
let staticServe = require('koa-static');
let path = require('path');

let port = 9000;
let app = koa();

app.use(staticServe(path.resolve(__dirname + '/../build')));

app.listen(port);
console.log(`Listening on port ${port}`);
