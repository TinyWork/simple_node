var express = require('express')
var lazy = require('lazily-require');
global.appRoot = require('approot')(__dirname).consolidate();
global.Routes = lazy(appRoot.routes());
global.express = express;
