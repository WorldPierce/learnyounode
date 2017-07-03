var fs = require('fs');
var count = undefined;

function readFile(callback){
    fs.readFile(process.argv[2], function done(err, data){
        if(err){
            return console.log(err);
        }
        count = data.toString().split('\n').length - 1;
        callback();
    })
}
function printIt(){
    console.log(count);
}
 
readFile(printIt);
//Alternate Solution
    // var fs = require('fs')
    // var file = process.argv[2]
    
    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })