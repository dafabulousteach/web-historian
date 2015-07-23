var path = require('path');
var archive = require('../helpers/archive-helpers');
var indexPage = require('../archives/sites.txt');
var url = require('url');
var helpers = require('./http-helpers.js');
var destination = require('./archives/sites.txt');

var messages = { // Object to store results
  results: []
};
var statusCode = null;

exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){
    statusCode = 200;
    
    archive.paths.list = './archives/sites.txt';
    res.writeHead(statusCode, headers);
    // readListOfURLs();
    
  } 

  res.end(archive.paths.list);
};


// pass test 1: write out the GET
// make res.end be the thing to return (contents of index.html)