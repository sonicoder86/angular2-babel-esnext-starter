'use strict';
let router = require('koa-router')();
let uuid = require('node-uuid');

let posts = [
  {
    _id: uuid.v4(),
    name: 'Angular',
    website: 'https://angular.io/',
    description: 'Angular is a development platform for building mobile and desktop web applications.'
  },
  {
    _id: uuid.v4(),
    name: 'RxJs',
    website: 'http://reactivex.io/',
    description: 'Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators.'
  },
  {
    _id: uuid.v4(),
    name: 'Babel',
    website: 'https://babeljs.io/',
    description: 'Babel is a compiler for writing next generation JavaScript.'
  }
];

router.get('/posts', function*() {
  this.body = posts;
});

router.post('/post', function*() {
  posts.unshift(Object.assign(
    { _id: uuid.v4() },
    this.request.body
  ));

  this.body = {success: true};
});

module.exports = router;