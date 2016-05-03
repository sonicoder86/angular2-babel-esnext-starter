# Angular 2 ESNext Starter
[![npm version](https://badge.fury.io/js/angular2.svg)](http://badge.fury.io/js/angular2)
[![Dependency Status](https://david-dm.org/blacksonic/angular2-esnext-starter.svg)](https://david-dm.org/blacksonic/angular2-esnext-starter)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-esnext-starter/dev-status.svg)](https://david-dm.org/blacksonic/angular2-esnext-starter#info=devDependencies)
[![Build Status](https://travis-ci.org/blacksonic/angular2-esnext-starter.svg?branch=master)](https://travis-ci.org/blacksonic/angular2-esnext-starter)
[![Code Climate](https://codeclimate.com/github/blacksonic/angular2-esnext-starter/badges/gpa.svg)](https://codeclimate.com/github/blacksonic/angular2-esnext-starter)
[![Code Coverage](https://codeclimate.com/github/blacksonic/angular2-esnext-starter/badges/coverage.svg)](https://codeclimate.com/github/blacksonic/angular2-esnext-starter)

This repo stands as a starting point for those who try [Angular 2](https://angular.io/) in Javascript.
It shows techniques how easy development can be also without Typescript.
It is a basic CRUD application with authentication, similar to the news site [jslive.com](https://jslive.com).
You can see the list of links, add and edit them after you signed in.

**Important! This starter currently runs on beta.17 version of Angular 2. If you are interested in the brand new rc.0 visit my [TodoMVC application](https://github.com/blacksonic/angular2-esnext-todomvc). This repository will be upgraded soon afterwards.**

> If you're looking for Angular 2 in Javascript without Gulp tasks and server side check out [angular2-esnext-todomvc](https://github.com/blacksonic/angular2-esnext-todomvc)

> If you're looking for Angular 2 in Typescript check out [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

- Pure Javascript implementation.
- Uses [Babel](https://babeljs.io/) to support class/parameter decorators.
- Bundles files with [Webpack](https://webpack.github.io/).
- Automates tasks with [Gulp](http://gulpjs.com/).
- Automatically rebundles and refreshes the browser on changes.
- Unit testing with [Karma](https://karma-runner.github.io/0.13/index.html) and [Jasmine](http://jasmine.github.io/).
- Code coverage for original ES6 code.
- E2E testing with [Protractor](https://angular.github.io/protractor/#/).
- Includes deployment to [Heroku](https://heroku.com/).
- Linting with [ESlint](http://eslint.org/) based on [Airbnb's styleguide](https://github.com/airbnb/javascript).

### Motivation

There are plenty of resources for starter packs and documentations on how to write your Angular 2 application in Typescript.
The official documentation is only complete for Typescript and the parts which are also in Javascript are so few and in ES5 syntax which is little bit verbose compared to ES6.
This is why i decided to make a starter pack to show that equivalent easy and viable solutions exist in Javascript.

It does not want to be by any means an against Typescript repository,
just a choice for people, who like the loosely typed nature of Javascript or just feel overwhelmed by having to learn both Angular 2 and Typescript when trying out the new framework.
By adding Flow types and using decorators wherever you can, it will be really easy to switch to Typescript by adding type definitions to the project (if you want to).

### Concepts covered

- Creating components with directives
- Communication between child and parent components
- Dependency injection for services
- Change detection strategies
- Using custom pipes in templates
- Handling HTTP calls
- Using observables
- Routing
- Authentication and restricting access to routes
- Form handling
- Using custom validators in forms
- Internationalization

### Quick Start

```bash

git clone https://github.com/blacksonic/angular2-esnext-starter.git
cd angular2-esnext-starter
npm install

gulp serve

```

It bundles the application, copies the static files and starts the webserver with Nodemon.
The transpiled application will have two separate ES5 compatible files: ```vendor.js``` for vendor libraries, ```boot.js``` for application logic.
Server side changes restart the server, client side changes rebundle the Angular 2 application and refresh the page with Livereload.

Note: The application needs at least Node 4+ installed.

Open it in your browser [http://localhost:9000](http://localhost:9000) and start coding your first Angular 2 application in Javascript!

### Testing

```bash

gulp test

```

Runs tests with [Karma](https://karma-runner.github.io/0.13/index.html) and [Jasmine](http://jasmine.github.io/).
Uses a single entry point (```setup.spec.js```), which includes all the ```*.spec.js``` files and runs the tests inside them.
The test files can be found in the ```client/app``` folder next to the source files.

Because a clean bundling with Webpack can take multiple seconds, it is not ideal for development to run a clean test run every time.
Instead it can run continuously on your development machine.

```bash

gulp test-dev

```

To get a good overview of testing possibilities within Angular 2 [read this article](https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584).

### ES6 workarounds

##### Dependency Injection

By default parameter injection doesn't work as in Typescript, instead we need to define the ```parameters``` getter in the class.

```javascript
@Injectable()
export class UserService {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this._http = http;
  }
}
```

If we want to be standard complaint we can use this technique.
Examples for this can be found in the ```auth``` module directory.

To make it less verbose we can use [Flow](http://flowtype.org/) types with the help of
[babel-plugin-angular2-annotations](https://github.com/shuhei/babel-plugin-angular2-annotations)
and [babel-plugin-transform-flow-strip-types](https://babeljs.io/docs/plugins/transform-flow-strip-types/).

```javascript
@Injectable()
export class UserService {
  constructor(http: Http) {
    this._http = http;
  }
}
```

Just added the type to the constructor and it works as with ```parameters``` getter.
To see it in action take a look at the ```post``` module directory.

For a more detailed description about dependency injection possibilities [read this article](https://medium.com/@blacksonic86/angular-2-dependency-injection-in-es6-f5551a3d6bf).

##### Component Inputs

By default ```@Input``` decorators for empty properties won't work, instead it can be written into the ```@Component``` decorator.

```javascript

@Component({
  selector: 'list-item',
  template: template,
  inputs: ['post']
})
export class ListItemComponent {
  post;
}
```

You can see it work inside ```post``` module's ```list-item``` component.

To overcome this [babel-plugin-angular2-annotations](https://github.com/shuhei/babel-plugin-angular2-annotations) helps us to enable ``@Input``` decorators for empty properties.
Now it can be written less verbose.

```javascript
@Component({
  selector: 'post-form',
  template: template
})
export class FormComponent {
  @Input()
  post;

  @Output()
  saved = new EventEmitter();
}
```
You can see it work inside ```post``` module's ```form``` component.

### Authentication

Authentication is solved by extending the default ```RouterOutlet``` and adding logic to it's ```activate``` method.
This solution is preferred for now, because the ```@CanActivate``` router lifecycle decorator has no access to the application's dependency injection, only with workarounds.
For a detailed explanation [read this article](https://medium.com/@blacksonic86/authentication-in-angular-2-958052c64492).

### Deployment (to Heroku)

It bundles the client application and copies static files and server files to the ```dist``` directory along with ```package.json```.
Then it can be commited to the desired location (for example Heroku).

```bash

gulp dist

cd dist
git init
git add -A .
git commit -m "Deploy #1" && echo Committed
git push -f git@heroku.com:angular2-es6-starter.git master

```

Check out the [deployed version](https://angular2-es6-starter.herokuapp.com/).
