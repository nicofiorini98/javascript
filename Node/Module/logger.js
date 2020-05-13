//in this module let's imagine that we're going to use one of those 
//remote logging services for login our messages, so there are websites out there provide
//logging as a service, they give us a URL  and we can send an HTTP request to that URL to log messages in 
//the cloud



console.log(__filename);
console.log(__dirname  );


var url= 'http://mylogger.io/log';

function log(message) {
    //send http request
    console.log(message);
    

}


//variable url and this function is scoped in the module, they're private, they're not visible from the outside 
//we should be able to call it from the app module, so we need to make this public, we need to make it visible from the outside

//in json file, in the file app.js, we have the exports{}, this was empty


module.exports = log;
//module.exports.endPoint=url;  //i can also change the name of the variable 
