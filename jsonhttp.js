var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
        
    if (req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
       //console.log("Get");
       var parsed = url.parse(req.url, true);
       var time = new Date(parsed.query.iso);
       var json;
       //console.log(time.getTime());
       if(req.url.match(/unixtime/gi)){
           json = {"unixtime": time.getTime()};
       }
       else {
           json = {
               "hour": time.getHours(),
               "minute": time.getMinutes(),
               "second": time.getSeconds()
           }
       }
       res.end(JSON.stringify(json));
    }
})
server.listen(Number(process.argv[2]));

//thier colution

    // var http = require('http')
    // var url = require('url')
    
    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }
    
    // function unixtime (time) {
    //   return { unixtime: time.getTime() }
    // }
    
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result
    
    //   if (/^\/api\/parsetime/.test(req.url)) {
    //     result = parsetime(time)
    //   } else if (/^\/api\/unixtime/.test(req.url)) {
    //     result = unixtime(time)
    //   }
    
    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))