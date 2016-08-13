var React = require('react');
var ReactDOM = require('react-dom');
var Raven = require('raven-js');
var routes = require('./config/routes');
var c = require('./config/vars');

__mainDir = __dirname;

Raven.config(c.sUrl).install();

window.onerror = function () {
//  Raven.showReportDialog();
}

ReactDOM.render(
  routes,
  document.getElementById('app')
);
