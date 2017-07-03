var fs = require('fs');
var match = process.argv[3];
var re = new RegExp('.'+match, "gi");

function readFile(callback){
    fs.readdir(process.argv[2], function done(err, data){
        if(err){
            return console.log(err);
        }
        //list = data.toString().split('\n')
        for(var i = 0; i < data.length; i++){
            if(data[i].match(re)){
                callback(data[i]);
            }
        }
    })
}
function printIt(entry){
    console.log(entry);
}
 
readFile(printIt);

//Alternate solution
    // var fs = require('fs')
    // var path = require('path')
    
    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]
    
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })