
const Eventemitter=require('events');
const emitter = new Eventemitter();


var url = 'http://mylogger.io/log' ;

class Logger extends Eventemitter{
    log(message){
        //send ann HTTP request
    
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged',{"id":1, "url": 'http://'}); 
    
    }
}


module.exports = Logger;