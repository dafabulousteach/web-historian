var path = require('path');
var archive = require('../helpers/archive-helpers');
var urlParser = require('url');
var utils = require('./http-helpers');

var actions = {
  'GET': function(req, res){
    var parts = urlParser.parse(req.url);
    var urlPath = parts.pathname === '/' ? '/index.html' : parts.pathname;
    utils.serveAssets(res, urlPath);
  },
  'POST': function(req, res){
    utils.collectData(req, function(data){
      // in sites.txt?
        // yes:
          // is archived?
            // yes:

    });
  }
};

exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  if(action){
    action(req, res);
  } else {
    utils.sendResponse(res, "Not Found", 404);
  }
};
  

