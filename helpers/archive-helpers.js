var fs = require('fs');
var path = require('path');
var _ = require('underscore');

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

exports.readListOfUrls = function(callback){
  fs.readFile(exports.paths.list, function(err, sites){
    sites = sites.toString().split('\n');
    if(callback){
      callback(sites);
    }
  });
};

exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(sites){
    var found = _.any(sites, function(site, i){
      return site.match(url)
    });
    callback(found);
  });
};

exports.addUrlToList = function(){
};

exports.isUrlArchived = function(){
};

exports.downloadUrls = function(){
};
