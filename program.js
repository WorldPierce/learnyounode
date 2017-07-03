var net = require('net')  
     var server = net.createServer(function (socket) {  
       // socket handling logic  
       var d = Date().split(" ");
       var n = new Date();
       var month, time;
       time = d[4].split(":")[0]+":"+d[4].split(":")[1];
       n = n.toLocaleDateString().split("/");
       if(n[0] < 10){
            month = "0"+n[0];
       }
       else{
            month = n[0];
       }
       //console.log(n.toLocaleDateString());
       
       var date =  d[3] + "-" + month + "-" + d[2] + " " + time+"\n";
       console.log(date);
       socket.write(date);
       socket.end();
     })  
     server.listen(process.argv[2]); 