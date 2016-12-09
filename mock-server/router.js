'use strict';
let router = require('koa-router')();
let jwt = require('jsonwebtoken');
let config = require('./config');
let jwtMiddleware = require('koa-jwt')({ secret: config.jwt_secret });
let uuid = require('node-uuid');
console.log('HELLO MOCK SERVER!!!')
let categories = [{
    "_id" : uuid.v4(),
    "name" : "Angularjs"
},
{
    "_id" : uuid.v4(),
    "name" : "Angular2"
},
{
    "_id" : uuid.v4(),
    "name" : "Android"
},
{
    "_id" : uuid.v4(),
    "name" : "React"
}];

let articles = [
{
    "_id" :  uuid.v4(),
    "name" : "angular2 - first step",
    "tags" : [ 
        "Angular2", 
        "beginners", 
        "timeticker"
    ],
    "img" : "https://gravatar.com/avatar/c9e0eedda66ad0a55cb7aaced698edf2?s=96&amp;d=https://dashboard.heroku.com%2Fimages%2Fstatic%2Fninja-avatar-48x48.png",
    "description" : "How is it feeling programming Angular2?",
    "text" : "Recently i started to play with recently released beta of \n<a href=\"https://angular.io/\">angular2</a>.<br />\nI'm totally beginner and i want to build very simple thing.<br />\nI want to build the component (component is like directive in angular 1.) that displays current time in format given as a parameter (through the attribute <strong>format</strong>).\n<br />\n<pre>  \n  <code class=\"language-markup\">\n    &lt;now format=\"'h:mm:ss'\"&gt;&lt;/now&gt;\n  </code>\n</pre>\nWhen rendered HTML, should look like this:\n<br/>\n<a href=\"http://3.bp.blogspot.com/-DGHtmWUGif8/VpOTPK4UXbI/AAAAAAAAAR8/Lgz7IcKwq-w/s1600/Capture.PNG\" imageanchor=\"1\"><img border=\"0\" src=\"http://3.bp.blogspot.com/-DGHtmWUGif8/VpOTPK4UXbI/AAAAAAAAAR8/Lgz7IcKwq-w/s320/Capture.PNG\" /></a>\n<br />\n\n<h3>How to run angular2?</h3>\n<p>First thing you need then you want to run angular2 is environment.<br/>You can use one of angular2 starter kits like <a href=\"https://github.com/mgechev/angular2-seed\">this one</a> Or just open <a href=\"http://http://plnkr.co/\">plunker</a> and select \"<b>Editor</b>\" -> \"<b>New</b>\" -> <b>\"AngularJs</b>\" -> \"<b>2.0.x TS</b>\" and viola!! you are angular2 programmer!  </p>\n<br />\n<h3>Component</h3>\n\nThe first basic thing in angular2 is component, so:\nLets create a component:\n\n<br />\n<pre>\n<code class=\"language-javascript\">\n\nimport {Component} from 'angular2/core'\n\n@Component({\n  selector: 'now',\n  template: `<h2>{{date}}</h2>`      \n})\nexport class Now {\n  private date;\n  constructor() { \n    this.date =  new Date(); \n  } \n} \n</code>\n</pre>\n\n<p>\nYoo hoo!!! The component created and running!!!<br/>\nAnd it displays the current date!!!<br/>\nBut one little disturbing thing is that date appears raw , which is little bit ugly...<br/> \n<div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"http://2.bp.blogspot.com/-uyQGbQq6ROU/VpdF5c29qRI/AAAAAAAAASM/OYy807KDySQ/s1600/uglyDate.PNG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"http://2.bp.blogspot.com/-uyQGbQq6ROU/VpdF5c29qRI/AAAAAAAAASM/OYy807KDySQ/s320/uglyDate.PNG\" /></a></div>\n So lets improve the component by formatting the output.\n</p>\n\n<br />\n\n<h3>Pipe (Filter)</h3>\nLike in sngular 1. there are filters in angular2, they called <b>pipes</b>\n<br />\n<br />\n<pre><code class=\"language-javascript\">\nimport {Component} from 'angular2/core'\n\n@Component({\n  selector: 'now',\n  template: `<h2>{{date | date :'dd/MM/yyyy'}}</h2>`      \n})\n\n</code>\n</pre>\n<br/>\n<h3>\nGetting value from attribute (The tricky part)</h3>\nAs we already said the desired format should be passed through the attribute. But how to access this attribute from inside component constructor?\nFortunately there is Attribute module which enables you to inject attribute into constructor parameters:\n<br />\n<pre><code class=\"language-javascript\">\nimport {Component, Attribute} from 'angular2/core'\nexport class Now {\n   private date;\n   \n  constructor(@Attribute(\"format\") format) { \n    this.format = format;\n    this.date =  new Date(); \n\n  } \n\n} \n</code>\n</pre>\n\n\n<h3>Better way</h3>\n<p>\nAfter <a href=\"https://en.wikipedia.org/wiki/Vladimir_Lenin\">Lenin</a>'s older brother was executed because he tried(but failed) to kill king of Russia with bomb, young Lenin said \"We will go different way\"...<br/>\nAfter looking at angular2 <a href=\"https://angular.io/docs/ts/latest/guide/attribute-directives.html\">docs</a> i found better (more angular2mish) way which says that if we want to pass attribute to component we must use square brackets :<br/>\n\n<pre>  \n  <code class=\"language-markup\">\n    &lt;now [format]=\"'h:mm:ss'\"&gt;&lt;/now&gt;\n  </code>\n</pre>\n<br/>\n\nI will use @Input module instead of @attribute\n</p>\n\n<pre><code class=\"language-javascript\">\n\n\nimport {Component,  Input} from 'angular2/core'\n\n@Component({\n  selector: 'now',\n  template: `\n      <h2   (updateTime)=\"updateMyTime()\">{{date | date: _format}}</h2>\n    `\n})\nexport class Now {\n   private date;\n   @Input() set format(formatName:string){\n     this._format = formatName;\n   \n   }   \n  constructor() { \n    this.date =  new Date(); \n  } \n\n} \n</code>\n</pre>\n<br/>\n\n<h3>How to update time each second?</h3>\nLittle nice thing to add here is ability to update the time displayed in directive each second. For achieve this i'm using ES6 fat arrow syntax\n<br />\n<pre><code class=\"language-javascript\">\n\nexport class Now {\n   private date;\n   @Input() set format(formatName:string){\n     this._format = formatName;\n   \n   }   \n  constructor() { \n    this.date =  new Date(); \n    \n    setInterval(() => {\n        this.date =  new Date();\n     }, 1000);\n  } \n\n} \n</code>\n</pre>\n<br/>\n<a href=\"http://plnkr.co/edit/1DtJB6nAAYp9ZXOcfP6P?p=preview\">View it on plunker:</a><br/>\n<iframe  src=\"http://embed.plnkr.co/1DtJB6nAAYp9ZXOcfP6P/\" width=\"100%\" height=\"400px\" frameborder=\"0\"></iframe>"
},
{
    "_id" :  uuid.v4(),
    "name" : "Creating chart component - angular2",
    "tags" : [ 
        "Angular2"
    ],
    "img" : "https://gravatar.com/avatar/c9e0eedda66ad0a55cb7aaced698edf2?s=96&amp;d=https://dashboard.heroku.com%2Fimages%2Fstatic%2Fninja-avatar-48x48.png",
    "description" : "create an angular2 component which displays chart",
    "text" : "After creating my <a href=\"http://gs500coder.blogspot.co.uk/2016/01/building-my-first-directive-with.html\">first component</a> which displays current time, i want to try something little bit complicate.<br />\nThis time lets create a component which displays chart:<br />\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"http://3.bp.blogspot.com/-87mMYvcubjo/VqDo0aNZsOI/AAAAAAAAASc/ShsbWor87dg/s1600/chart.PNG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"100\" src=\"http://3.bp.blogspot.com/-87mMYvcubjo/VqDo0aNZsOI/AAAAAAAAASc/ShsbWor87dg/s320/chart.PNG\" width=\"320\" /></a></div>\nFor draw a chart i will use <a href=\"http://www.flotcharts.org/\">jquery flot</a>  library which is one of libraries/plugins which let you to create beautiful charts.<br />\nAccording to jquery flot docs - for draw a chart you need to pass <strong>html element</strong>(selector), <strong>data</strong> and <strong>options</strong> to  plot plugin, like this:\n<br />\n<pre><code class=\"language-javascript\">\n$.plot( selector, dataset, options);\n</code>\n</pre>\n<br />\n<h2>\nComponent</h2>\nAs in previous case, lets create component<br />\n<pre><code class=\"language-javascript\">\nimport {Component, ElementRef} from 'angular2/core';\n\n@Component({\n  selector: 'flot',\n  template: `&lt;div&gt;loading&lt;/div&gt;`\n\n})\n\nexport class FlotCmp {\n  private dataset;\n  private options;\n  private width = '100%';\n  private height = 220;\n\n  \n  constructor(public el: ElementRef) {\n        this.dataset = [{label: \"line1\",data:  [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]]}];\n        this.options = {\n            series: {\n                lines: { show: true },\n                points: {\n                    radius: 3,\n                    show: true\n                }\n            }\n        };\n        \n        let plotArea = $(this.el.nativeElement).find('div');\n        plotArea.css({\n            width: this.width,\n            height: this.height\n        });\n        $.plot( plotArea, this.dataset, this.options);\n\n  }//end of constructor\n}\n</code>\n</pre>\nYes!!! Now the chart s created!!!<br />\nNote that for access the html element on which i want to apply the chart, i'v used <a href=\"https://angular.io/docs/js/latest/api/core/ElementRef-class.html\">ElementRef</a> module \n<br />\n<h2>\nPassing properties</h2>\nOur next goal is to make newly created component configurable - e.g. ability to pass \n<b>dataset</b>, <b>options</b>, <b>width</b>, <b>height</b> configuration properties through the attributes:\n <br />\n<pre>  <code class=\"language-markup\">\n     &lt;flot [options]=\"splineOptions\" [dataset]=\"dataset\" height=\"550px\" width=\"100%\"&gt;&lt;/flot&gt;\n </code>\n</pre>\n\"Piece of cake!\"  you may say, like in previous case use the  <a href=\"https://angular.io/docs/ts/latest/api/core/Input-var.html\">\"input\"</a> factory and you done:\n<br />\n<pre><code class=\"language-javascript\">\nimport {Component, ElementRef, Input} from 'angular2/core';\n\n@Component({\n  selector: 'flot',\n  template: `&lt;div&gt;loading&lt;/div&gt;`\n\n})\n//this will cause error!!!\nexport class FlotCmp{\n\n  private width = '100%';\n  private height = 220;\n  static chosenInitialized = false;\n  \n  @Input() private  options: any;\n  @Input() private  dataset:any;\n  @Input() private  width:string;\n  @Input() private  height:string;\n      \n   \n  constructor(public el: ElementRef) {\n        plotArea.css({\n            width: this.width, \n            height: this.height\n        });\n        $.plot( plotArea, this.dataset, this.options);        \n  }\n  ...  \n</code>\n</pre>\nBad idea! No chart created anymore.<br />\nBut why? Because the constructor runs before input setters passing their values.\nWe must move plot initiating logic to some later phase. I find the solution <a href=\"http://stackoverflow.com/questions/30623825/how-to-use-jquery-with-angular2\">here</a>. This guy uses  AfterViewInit factory:\n<br />\n<pre><code class=\"language-javascript\">\nimport {Component, ElementRef, Input, AfterViewInit} from 'angular2/core';\n\n@Component({\n  selector: 'flot',\n  template: `&lt;div&gt;loading&lt;/div&gt;`\n\n})\n\nexport class FlotCmp  implements AfterViewInit{\n\n  private width = '100%';\n  private height = 220;\n  static chosenInitialized = false;\n  \n  @Input() private  options: any;\n  @Input() private  dataset:any;\n  @Input() private  width:string;\n  @Input() private  height:string;\n \n  constructor(public el: ElementRef) {}\n\n  ngAfterViewInit() {\n      if(!FlotCmp.chosenInitialized) {\n        let plotArea = $(this.el.nativeElement).find('div').empty();\n        plotArea.css({\n            width: this.width, \n            height: this.height\n        });\n        $.plot( plotArea, this.dataset, this.options);    \n        FlotCmp.chosenInitialized = true;\n      }\n  } \n} \n\n</code>\n</pre>\nNow the chart initiating logic is in the <b>ngAfterViewInit</b> method which activates after properies already set.<br/>\n<iframe  src=\"http://embed.plnkr.co/9YOjcdLZHoPnGg6bDoo0/\" width=\"100%\" height=\"400px\" frameborder=\"0\"></iframe>\nHope you have fun reading!<br/>\nMore <a href=\"http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html\">posts</a> about angular2 stuff (used for me as inspiration source)"
}
];

let users = [
  {
    "_id"   :   uuid.v4(),
    "email" : "koko@koko.com",
    "password" : "koko"
 }
]


router.get('/categories', function*() { 
  this.body = categories;
});


router.get('/posts', function*() { 
  this.body = yield articles;
});

router.get('/posts/:tag', function*() {  
  var res = yield articles.filter(a=>{return a.tags.indexOf(this.params.tag)>-1;});
  this.body = res;
});

router.get('/article/:id', function*() {
  var res = yield articles.filter((a)=>a._id=== this.params.id)[0];
  res.tags = res.tags.join(',');
  this.body = res;
});

router.get('/post/:name', function*() {
  var res = yield articles.filter((a)=>a.name=== this.params.name.replace(/\-/g,' ').replace(/\*/g,'-'))[0];
  this.body = res;
});

router.post('/post/:id', jwtMiddleware, function*() {
  this.request.body.tags = this.request.body.tags.split(','); 
  this.body = this.request.body;
});


router.post('/post', jwtMiddleware, function*() {
  let newDoc = {
    name:this.request.body.name,
    tags:this.request.body.tags.split(','),
    text:this.request.body.text,
    img:this.request.body.img,
    description:this.request.body.description
  };
  var res = yield articles.push(newDoc);
  res._id = uuid.v4();
  Object.assign(newDoc, res);  
  this.body = newDoc;
});

router.post('/login', function*() {
  let email = this.request.body.email;
  let password = this.request.body.password;
  let result = {};
  let res = yield users;

  if (res.length) {
    console.log('LOGIN SUCCESS')
    result.success = true;
    result.auth_token = jwt.sign({ email: email }, config.jwt_secret);
  }

  this.body = result;
});

module.exports = router;