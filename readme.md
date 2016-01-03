# Angular 2 ES6 Starter [![Dependency Status](https://david-dm.org/blacksonic/angular2-es6-starter.svg)](https://david-dm.org/blacksonic/angular2-es6-starter)

A skeleton Angular 2 ES6 application built with Babel, Webpack, Gulp.
The example is based on the official [5 Min Quickstart](https://angular.io/docs/ts/latest/quickstart.html) tutorial.

- Uses Babel to support class/parameter decorators and parameter type annotations.
- No Typescript included.
- Bundles JavaScript files into one file with Webpack.
- Automates bundling with Gulp.
- Automatically rebundles and refreshes on changes.
- Testing with Jasmine.
- Deployment included.

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

### Projects

- [TodoMVC](https://github.com/blacksonic/angular2-es6-todomvc): TodoMVC application built with Angular 2.
