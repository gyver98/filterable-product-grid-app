# filterable-product-grid-app

Filterable product grid application.

## Table of contents
* [How to use](#user-content-how-to-use)
* [Features](#user-content-features)
* [Git clone or download](#user-content-Git-clone-or-download)
* [Setup](#user-content-setup)
* [npm tasks](#user-content-npm-tasks)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Running it with webpack dashboard](#user-content-running-it-with-webpack-dashboard)
* [Build application](#user-content-build-application)
* [Running test in dev mode](#user-content-running-test-in-dev-mode)
* [Running test in watch mode](#user-content-running-test-in-watch-mode)
* [Linting](#user-content-linting)
* [What it uses](#user-content-what-it-uses)
* [What is to come](#user-content-what-is-to-come)
* [Changelog](#user-content-changelog)

## Getting started

![start](https://github.com/gyver98/blog-images/blob/master/filterable-product-grid/getting-started.png?raw=true)


## Tech stacks

* Webpack(v3.10.0) - transpiling scripts, script & css minification, sass autoprefixing, image compression
* Webpack-dev-server(v2.9.7) - local development server
* React(v16.2.0) - javascript library for building user interfaces 
* Flexbox - responsive web design

## React component structure

![structure](https://github.com/gyver98/blog-images/blob/master/filterable-product-grid/structure.png?raw=true)

## Features

- [x] Webpack 3 (development and production config)
- [x] Hot Module Replacement
- [x] Babel - Transpile the JS from ES6/7 down to machine optimised ES5
- [x] SASS with autoprefixing
- [x] Webpack dashboard - A CLI dashboard for our webpack dev server
- [x] Linting - Lint the JS with errors and warnings to the terminal
- [x] WebpackMonitor - Optimization tool for production build
- [x] Move font/image files into Dist
- [x] Minification javascript & css
- [x] Unit testing automation with watch mode

## Git clone or download

Go to https://github.com/gyver98/filterable-product-grid-app

Then grab the project from the repo.

## Setup

Tested with node 7.x

Install the packages the project needs.

```
$ npm install
```
or 
```
$ yarn
```

## npm tasks

* `start` - starts app in development mode, using webpack dev server

* `build` - builds application in development mode

* `production` - builds application in production mode

## Running in dev mode

```
$ npm run start
```
or
```
$ yarn start
```

Visit `http://localhost:8080/` from your browser of choice.

## Build application

Build will be placed in the `public` folder without minification.
* bundle.js
* styles.css
* image files

```
$ npm run build
```
or
```
$ yarn build
```

## Build application in production mode

Build will be placed in the `public` folder with minification.
* bundle.js
* styles.css
* image files

```
$ npm run production
```
or
```
$ yarn production
```


## Linting

For linting we're using [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base),
but some options are overridden to our preferences.

```
$ npm run lint
```
or
```
$ yarn lint
```

## What it uses
* Webpack + DevServer
* Babel - ES7
* SASS
* Airbnb linting - https://github.com/airbnb/javascript
* Prettier code formatting
* DEV/PROD configs
* Git hooks for linting


## Changelog

#### 0.0.1

Initial release
