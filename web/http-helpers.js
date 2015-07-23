var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var Q = require('q');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  'Content-Type': "text/html"
};

exports.sendResponse = function(res, obj, status){
  status = status || 200;
  response.writeHead(status, headers);
  res.end(obj);
};

exports.collectData = function(req, callback){
  var data = '';
  req.on('data', function(chunk){
    data += chunk;
  });
  request.on('end', function(){
    callback(data);
  });
};

exports.serveAssets = function(res, asset, callback) {
  var encoding = {encoding: 'utf8'};
  // 1. check in public folder
  fs.readFile(archive.paths.siteAssets + asset, encoding, function(err, data){
    if(err){
    // 2. file doesn't exist in public, check archive folder
      fs.readFile(archive.paths.archivedSites + asset, encoding, function(err, data){
        if(err){
        // 3. file doesn't exist in either location
          exports.send404(res);
        } else {
          // file exists, serve it
          exports.sendResponse(res, data);
        }
      });
    } else {
      // file exists, serve it
      exports.sendResponse(res, data);
    }
  });
};
 
