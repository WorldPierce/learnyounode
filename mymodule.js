var fs = require('fs');
var path = require('path');
module.exports = function(dir, ext, callback){
    
    // var re = new RegExp('.'+ext, "gi");
   // function readLs(callback){
        fs.readdir(dir, function (err, data){
            if(err){
                return callback(err);
            }
            data = data.filter(function(file){
                return path.extname(file) === '.'+ext;
                
            })
            callback(null, data);
            //list = data.toString().split('\n')
            // for(var i = 0; i < data.length; i++){
            //     if(data[i].match(re)){
            //         //callback(data[i]);
            //         //console.log(data[i]);
            //         callback(null,data[i]);
            //     }
            // }
        })
    //}
    //readLs(call);
}