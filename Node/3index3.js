var sayHello = function(){

}

window.sayHello(); 



//in the real application, we often split our JavaScript code into multiple files, so it is possible that we have 
//two files and in both this file we define sayHello, the exact same name.

//Because this function is added to the global scope when we define this function in another file, that new definition is going to 
//overwrite the previous definition. this is the problem with the global scope.

//we need modularity to create small building blocks or modules where we define our variables and function

console.log(module);
//in node every file is a module and the variables and function defined are scoped to that module


//in the next lecture we going to learn how to create and load a module


