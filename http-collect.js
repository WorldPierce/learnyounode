// <https://npmjs.com/bl> <https://npmjs.com/concat-stream>
//npm install bl - API
var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    // response.on("data", function(data){
    //     console.log(data);
    // })
    response.pipe(bl(function(err,data){
        if(err){
            return console.log(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }))
})
    // var http = require('http')
    // var bl = require('bl')
    
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err) {
    //       return console.error(err)
    //     }
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))
    // })