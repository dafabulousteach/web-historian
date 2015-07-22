var path = require('path');
var archive = require('../helpers/archive-helpers');
var indexPage = require('../archives/sites.txt');
var url = require('url');
var messages = { // Object to store results
  results: []
};
var statusCode = null;

exports.handleRequest = function (req, res) {
  if(req.method === 'GET'){
    statusCode = 200;
    message = JSON.stringify(indexPage);
    reponse.writeHead("THIS IS YOUR ARCHIVE SPARTAAAA")
    
  } else if (req.method === 'POST'){
      var data = ''; 
      request.on('data', function (chunk) { // in case data comes in chunks, we put the pieces together in data
        data += chunk.toString();
      });
      request.on('end', function (){ // event fires when data is complete
        messages.results.push(JSON.parse(data)); // stores message in messages object
        
      })
    console.log('this is the POST message');
  } else if(req.method === 'OPTIONS'){
    // console.log('this is the OPTIONS message');
  }

  res.end("wooooowww OH HAY GURL HAYYYY",archive.paths.list);
};


