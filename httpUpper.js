var http = require('http');
//var fs = require('fs');
var map = require('through2-map');
    
    var server = http.createServer(function (req, res) {
        
        if (req.method == 'POST') {
          res.writeHead(200, { 'content-type': 'text/plain' });
        //   req.on('data', function(data){
        //       var buf = fs.readFileSync(data);
        //       var str = buf.toString().map(function(data){
        //         return data.toString().toUpperCase();
        //     })
        //     fs.createWriteStream(str).pipe(res);    
        //   })
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
          
        }
    })
    
    server.listen(Number(process.argv[2]));
    
    //Their Colution
    
    // var http = require('http')
    // var map = require('through2-map')
    
    // var server = http.createServer(function (req, res) {
    //   if (req.method !== 'POST') {
    //     return res.end('send me a POST\n')
    //   }
    
    //   req.pipe(map(function (chunk) {
    //     return chunk.toString().toUpperCase()
    //   })).pipe(res)
    // })
    
    // server.listen(Number(process.argv[2]))