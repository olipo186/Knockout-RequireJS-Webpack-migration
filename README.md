# Migration from RequireJS to Webpack
The two projects in this repository demonstrates how a web application based on Knockout can be migrated from RequireJS to Webpack with minimal change.

## Code changes applied during migration
During the migration, requirejs imports implicitly using the requirejs text loader needed to be modified to instead use the default (webpack) loader.

Lines looking like this
```
require('text!app/components/index-page.html')
```
needs to be changed into
```
require('app/components/index-page.html')
```

## Running the RequireJS example

Host the site locally using the HTTP server from npm package `http-server`
```
npm install -g http-server
cd knockout-requirejs-example
http-server -c -1
```

## Running the Webpack example

Install dependencies and run webpack
```
cd knockout-webpack-example
npm install
webpack
```

Host the site locally using the HTTP server from npm package `http-server`
```
cd knockout-webpack-example

npm install -g http-server
cd knockout-webpack-example
http-server -c -1
```
