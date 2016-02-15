# Angular 2 ES6 Starter 
[![npm version](https://badge.fury.io/js/angular2.svg)](http://badge.fury.io/js/angular2)
[![Dependency Status](https://david-dm.org/blacksonic/angular2-es6-starter.svg)](https://david-dm.org/blacksonic/angular2-es6-starter)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-es6-starter/dev-status.svg)](https://david-dm.org/blacksonic/angular2-es6-starter#info=devDependencies)
[![Build Status](https://travis-ci.org/blacksonic/angular2-es6-starter.svg?branch=master)](https://travis-ci.org/blacksonic/angular2-es6-starter)

This repo stands as a starting point for those who try Angular 2 in Javascript.
It aims to use only standard compliant features while showing techniques how easy development can be also without Typescript.
It shows a basic CRUD application with authentication, similar to Javascript news site [jslive.com](https://jslive.com).
You can see the list of links, add and edit them after you signed in.

- Uses Babel to support class/parameter decorators.
- No Typescript included.
- Bundles JavaScript files with Webpack.
- Automates tasks with Gulp.
- Automatically rebundles and refreshes on changes.
- Unit testing with Karma and Jasmine.
- E2E testing with Protractor.
- Includes deployment.
- Linting with ESlint based on Airbnb's styleguide.

### Motivation

There are plenty of resources for starter packs and documentations on how to write your Angular 2 application in Typescript.
The official documentation is only complete for Typescript and the parts which are also in Javascript are so few and in ES5 syntax which is little bit clunky compared to ES6.
The examples in starter packs for Javascript are so minimal, that you can hardly make a complex application without knowing the Javascript equivalents of Typescript solutions.
This is why i decided to make a starter pack to show that equivalent easy and viable solutions exist in Javascript. I have collected and put these solutions into this repo.

### Concepts covered

- Creating components with directives
- Communication between child and parent components
- Dependency injection for services
- Change detection strategies
- Using custom pipes in templates
- Handling HTTP calls
- Using observables
- Routing
- Adding authentication to routing
- Form handling
- Using custom validators in forms

### Quick Start

It bundles the application (JS files), copies the static files and starts the webserver with Nodemon.
On server side changes restarts the server, on client side changes rebundles JS files and refreshes the page with Livereload.

```bash

git clone https://github.com/blacksonic/angular2-es6-starter.git
cd angular2-es6-starter
npm install

gulp serve

```

Open it in your browser [http://localhost:9000](http://localhost:9000) and let the fun begin!

### Testing

Runs tests with Karma and Jasmine against the Angular 2 application.

```bash

gulp test

```

Because of the bundling of Webpack it takes multiple seconds which is not ideal for every file change.
On your local machine you can run it continously.
The test files can be found in the ```client/app``` folder next to the source files with ```*.spec.js``` extensions.

```bash

gulp test-dev

```

### Deployment (to Heroku)

It bundles the application (JS files) and copies static files and server files to ```dist``` directory along with ```package.json```.
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
