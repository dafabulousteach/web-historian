var path = require('path');
var archive = require('../helpers/archive-helpers');
var indexPage = require('./archives/sites.txt');
var url = require('url');

var fs = require('fs');

var statusCode = null;

exports.handleRequest = function (req, res) {
  
// refer to the URL using path.basename method
  // if basename is empty, then access the homepage (index.html)
  // if not empty, access everything after slash

  var base = archive.paths.archivedSites + '/' + path.basename(req.url)
  console.log(base)
  
  // if the base is empty, then base is equal to homepage (index.html)
  if (path.basename(req.url) === '') { 
    base = archive.paths.siteAssets + '/index.html'
  }; 

  if(req.method === "GET"){
    fs.readFile(base, function(err, html) {
      if (err) {
        res.writeHeader(404, {'Content-Type': 'text/html'});
        res.end();
      }
      res.writeHeader(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
    

    // create a callback function for the check-error 

    // go to archive and if file does not exist, create the file
      // if file exists, clear it
    // write data to the file


    // fs.open(archive.paths.archivedSites, 'w', function(err, html) {
    //   if (err) {
    //     throw err;
    //   }
    // });
    // fs.writeFile(archive.paths.archivedSites, 'www.google.com', function(err, html) {
    //   if (err) {
    //     throw err;
    //   }
    // });


  }
  if (req.method === 'POST') {
    // 
  }
  // res.end();
  // res.end(archive.paths.list);
};

// pass test 1: write out the GET
// make res.end be the thing to return (contents of index.html)

