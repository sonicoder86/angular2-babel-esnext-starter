# Angular 2 ESNext Starter
[![Dependency Status](https://david-dm.org/blacksonic/angular2-esnext-starter.svg)](https://david-dm.org/blacksonic/angular2-esnext-starter)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-esnext-starter/dev-status.svg)](https://david-dm.org/blacksonic/angular2-esnext-starter#info=devDependencies)
[![Build Status](https://travis-ci.org/blacksonic/angular2-esnext-starter.svg?branch=master)](https://travis-ci.org/blacksonic/angular2-esnext-starter)
[![Code Climate](https://codeclimate.com/github/blacksonic/angular2-esnext-starter/badges/gpa.svg)](https://codeclimate.com/github/blacksonic/angular2-esnext-starter)
[![Code Coverage](https://codeclimate.com/github/blacksonic/angular2-esnext-starter/badges/coverage.svg)](https://codeclimate.com/github/blacksonic/angular2-esnext-starter)

This repo stands as a starting point for those who try [Angular 2](https://angular.io/) in Javascript.
It shows techniques how easy development can be also without Typescript.
It is a basic CRUD application with authentication, similar to the news site [jslive.com](https://jslive.com).
You can see the list of links, add and edit them after you signed in.

> If you're looking for Angular 2 in Javascript without Gulp tasks and server side check out [angular2-esnext-todomvc](https://github.com/blacksonic/angular2-esnext-todomvc)

> If you're looking for Angular 2 in Typescript check out [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

- Pure Javascript implementation.
- Uses [Babel](https://babeljs.io/) to support class/parameter decorators.
- Same language constructs can be used as in Typescript (types will be stripped).
- Bundles files with [Webpack](https://webpack.github.io/).
- Automates tasks with [Gulp](http://gulpjs.com/).
- Automatically rebundles and refreshes the browser on changes.
- Unit testing with [Karma](https://karma-runner.github.io/0.13/index.html) and [Jasmine](http://jasmine.github.io/).
- Code coverage for original ES6 code.
- E2E testing with [Protractor](https://angular.github.io/protractor/#/).
- Includes deployment to [Heroku](https://heroku.com/).
- Linting with [ESlint](http://eslint.org/) based on [Airbnb's styleguide](https://github.com/airbnb/javascript).
- Layout and namings based on the [official Angular 2 style guide](https://angular.io/styleguide)

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
- ~~Internationalization~~ ng2-translate not compatible with Angular 2 rc.0 for now

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

**No more is needed, code can be written as in Typescript!**

Read about the details how it is implemented [in this article](http://shuheikagawa.com/blog/2016/05/08/angular-2-with-babel/).

### Authentication

It is implemented with the router's built-in lifecycle events.
For a detailed explanation [read this article](https://medium.com/@blacksonic86/angular-2-authentication-revisited-611bf7373bf9).

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
