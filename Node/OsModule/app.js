/*let's see how to het information about the current operating system*/

const os= require('os');


var totalMemory = os.totalmem()
var freeMemory  = os.freemem()

//console.log('Total Memory:' + totalMemory);

//templete string
//ES6  / ES2015  : ECAScriopt 6 

console.log(`Total Memory: ${totalMemory }`)  //this print the total memory of this device 
console.log(`Free Memory: ${freeMemory  }`)   //this print the free memory of this device 