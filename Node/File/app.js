//in the documentation we have a module called file system. 
//in this module we have a comprehensive set of methods for working with files and directories


//EXAMPLE
//how to work with files in Node 

const fs = require('fs');

//almost every operation defined here comes in two forms
//1)synchronous or blocking
//2)asynchronous or non blocking

//i want avoid using synchronous methods
//these are there purely for simplicity.

//asynchronous methods iis preferred, because are non blocking.
// a node process are single thread 
const files = fs.readdirSync('./') ;   //this read the file in this directory

console.log(files);


 //all of this asynchronous methods take a function as their last argument
fs.readdir('./sdf', function(err, files){
    if (err) console.log('Error',err )
    else console.log('Result',files)
}); 
