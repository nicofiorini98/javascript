// A lot of nodes core functionality is based on the concept of Event 

//Event is basically a signal that indicates that something has happened in our application

//In Node we have a class called http, that we can use to build a web server 
//So we listen on a given port and every time we receive a request on that port, http class raises an event.

//our job is to respond to that event which basically involves reading that request and returning right response 

const EventEmitter = require('events');

const emitter = new EventEmitter();


const Logger = require('./logger')
const logger = new Logger();




//register a listenerl
logger.on('messageLogged',(arg) =>{  //this is arrow function
    console.log('Listener called',arg);

      
});

logger.log('message');


//raise an event  




//Raise: Logging to do, is to use