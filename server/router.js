'use strict';
let router = require('koa-router')();
let uuid = require('node-uuid');
let jwt = require('jsonwebtoken');
let config = require('./config');
let jwtMiddleware = require('koa-jwt')({ secret: config.jwt_secret });
let fs = require('fs');
let path = __dirname + '/articles/';
function getArticle( file) {
  return fs.readFileSync(path + file, { encoding: 'utf8' });
}

let posts = [
  {
    "_id": uuid.v4(),
    "name" : "angular2 - first step",
    "link" : "http://www.koko.com",
    "text" : getArticle('article_1.html'),
   // "website" : "http://gs500coder.blogspot.co.il/2016/01/building-my-first-directive-with.html/",
    "description" : "Want to know how is it feeling programming Angular?"
  },
  {
    "_id": uuid.v4(),
    "name" : "Creating chart component - angular2",
   // "website" : "http://gs500coder.blogspot.co.il/2016/01/creating-chart-component-angular2.html",
    "text" : getArticle('article_2.html'),   
    "description" : "create an angular2 component which displays chart"
  },
  {
    "_id": uuid.v4(),
    "name" : "Making collapsible directive with angular2",
    "text" : getArticle('article_3.html'), 
    //"website" : "http://gs500coder.blogspot.co.il/2016/02/bootstrap-collapsible-directive-in.html",
    "description" : "making collapsible directive based on bootstrap library"
  },
  {
    "_id": uuid.v4(),
    "name" : "Using Angular2 Services",
    "website" : "http://gs500coder.blogspot.co.il/2016/02/using-angular2-services.html",
    "description" : "How to make Angular2 Services"
  },
  {
    "_id": uuid.v4(),
    "name" : "Promises in Angular2",
    "website" : "http://gs500coder.blogspot.co.il/2016/03/using-promises-in-angular2.html",
    "description" : "What are Promises and how to use them with Angular2"
  },
  {
    "_id": uuid.v4(),
    "name" : "Custom events in angular2",
    "website" : "http://gs500coder.blogspot.co.il/2016/04/events-in-angular2.html",
    "description" : "What are custom events in Angular2"
  },
  {
    "_id": uuid.v4(),
    "name" : "Routes in angular2 (part 1)",
    "website" : "http://gs500coder.blogspot.co.il/2016/05/nested-routes-challenge-in-angular2.html",
    "description" : "Routes in Angular2"
  },
  {
    "_id": uuid.v4(),
    "name" : "Routes in angular2 (part 2)",
    "website" : "http://gs500coder.blogspot.co.il/2016/05/routes-in-angular2-part-2.html",
    "description" : "Nested Routes in Angular2"
  }
];
//
function findPost(id) {
  return posts.find((post) => {
    return post._id == id;
  });
}

router.get('/posts', function*() {
  this.body = posts;
});

router.get('/post/:id', function*() {
  let foundPost = findPost(this.params.id);

  if (foundPost) {
    this.body = foundPost;
  }
  else {
    this.throw(404);
  }
});

router.post('/post/:id', function*() {
  let foundPost = findPost(this.params.id);

  if (foundPost) {
    Object.assign(foundPost, this.request.body);
    this.body = foundPost;
  }
  else {
    this.throw(404);
  }
});


router.post('/post', jwtMiddleware, function*() {
  posts.unshift(Object.assign(
    { },
    this.request.body,
    { _id: uuid.v4() }
  ));

  this.body = {success: true};
});

router.post('/login', function*() {
  let email = this.request.body.email;
  let password = this.request.body.password;

  let result = {success: false};

  if (email == 'admin@gmail.com' && password == 'angular2') {
    result.success = true;
    result.auth_token = jwt.sign({ email: email }, config.jwt_secret);
  }

  this.body = result;
});

module.exports = router;