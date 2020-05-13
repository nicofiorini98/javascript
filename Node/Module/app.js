//console.log(module);

//module appear to be global, but actually this is not a global object.

//this print the module, we have an object module, it's a json object with these key value pairs, 
//every module has ID, PATH , we have parent , a children
//In node every file is a module, and the variables and functions defined in that file are scoped to 
//that module, they are not available outside of that module   


//app module and logger module are in the same folder 

const log = require('./logger.js');  // i can also use logger, javascript imply that is a file .js


//in the target i must write the relative path.

//require returns the object that is exported from this target module 

log('message');

//this is how we work with modules in node, when we define a module we export
