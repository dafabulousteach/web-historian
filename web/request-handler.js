var path = require('path');
var archive = require('../helpers/archive-helpers');
var url = require('url');
var fs = require('fs');
var statusCode = null;

exports.handleRequest = function (req, res) {
  

  if(req.method === "GET"){
  // refer to the URL using path.basename method
    // if basename is empty, then access the homepage (index.html)
    // if not empty, access everything after slash

    var base = archive.paths.archivedSites + '/' + path.basename(req.url)
    
    // if the base is empty, then base is equal to homepage (index.html)
    if (path.basename(req.url) === '') { 
      base = archive.paths.siteAssets + '/index.html'
    }; 
    fs.readFile(base, function(err, html) {
      if (err) {
        res.writeHeader(404, {'Content-Type': 'text/html'});
        res.end();
      }
      res.writeHeader(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
    
  }
  if (req.method === 'POST') {
    var data = '';
    req.on('data', function(chunk){
      data += chunk.toString('');
    });
    req.on('end', function(){
      fs.writeFile('./archives/sites.txt', JSON.parse(data.url), function(err, html){
        if(err){
          res.writeHeader(404, {'Content-Type': 'text/html'});
          res.end();
        }
        res.writeHeader(302, {'Content-Type': 'text/html'})
        res.end(html);
      });
    });  
  }
  
};


