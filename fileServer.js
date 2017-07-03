//var net = require('net')  
var fs = require('fs');
var http = require('http');

     var server = http.createServer(function (req, res) {  
       // socket handling logic  
     //request.
     var readStream = fs.createReadStream(process.argv[3]);
     
     readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
      
     })  
     server.listen(process.argv[2]); 
     
     //Their Solution
     
    //  var http = require('http')
    // var fs = require('fs')
    
    // var server = http.createServer(function (req, res) {
    //   res.writeHead(200, { 'content-type': 'text/plain' })
    
    //   fs.createReadStream(process.argv[3]).pipe(res)
    // })
    
    // server.listen(Number(process.argv[2]))