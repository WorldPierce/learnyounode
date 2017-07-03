var mymodule = require('./mymodule.js');


// var print = function(err, x){
//     if(err){
//         return console.error(err);
//     }
//     console.log(x);
// }



mymodule(process.argv[2], process.argv[3], function(err, list){
    if(err){
        return console.log(err);
    }
    //console.log(list);
    list.forEach(function(file){
        console.log(file);
    });
});


