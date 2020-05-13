/*one of the powerful building blocks of node is the HTTP module that we use for creating networking applications
for example : we can create web server that listens for HTTP requests on a given port, and with this we can 
easily create a back-end for our client applications, like a web application that we build with reac or angular, or 
mobile application running on a mobile device  
*/

const http = require('http');

const server = http.createServer((req,res) =>{  //in this function, instead of working with a socket, we can work
    //with the actual request or response object
    if(req.url=='/'){
        res.write('hello friend');
        res.end();
    }

});

//is interesting that this server is an event emitter

// server.on('connection',(socket) =>{
//     console.log('New connection'); 

// })

server.listen(3000);

console.log('Listening on port 3000');

//this server object