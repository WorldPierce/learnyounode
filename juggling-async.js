var bl = require('bl');
var http = require('http');
var arr = [];
var count = 0;

// for(var i = 2; i < process.argv.length; i++){
function getter(i){
    http.get(process.argv[i + 2], function(response){
        response.setEncoding('utf8');
        
        response.pipe(bl(function(err,data){
            if(err){
                return console.log(err);
            }
           arr[i] = data.toString();
           count++;
        }))
        response.on('end',function(){
            //count++;
            if(count > 2){
                printer();
            }
        })
    })
}
function printer(){
    for(var i = 0; i < 3; i++){
            console.log(arr[i]);
        }
}

for(var j = 0; j < 3 ; j++){
    getter(j);
}
