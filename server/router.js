'use strict';
let router = require('koa-router')();
let uuid = require('node-uuid');
let jwt = require('jsonwebtoken');
let config = require('./config');
let jwtMiddleware = require('koa-jwt')({ secret: config.jwt_secret });
let fs = require('fs');
let path = __dirname + '/articles/';
let assert = require('assert');

//
function findPost(id) {  
  return posts.find((post) => {
    return post._id == id;
  });
}


let  monk = require('monk');
let wrap = require('co-monk');
let db = monk(process.env.MONGODB_URI);
let articles = wrap(db.get('articles'));
let ObjectId = require('mongodb').ObjectId; 

router.get('/posts', function*() {  
  var res = yield articles.find({"tags": "Angular2"});
  //articles.findAndModify({ _id: res[0]._id }, { $set: {text:getArticle('article_1.html')} }); 
  this.body = res;
});

router.get('/post/:name', function*() {
  
  var res = yield articles.findOne({name: this.params.name.replace(/\-/g,' ').replace(/\*/g,'-')});
  this.body = res;
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