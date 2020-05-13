function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

//Circle.call({},1) //this expression is exactly the same of the following line 
//Circle.apply({},[1,2,3]) //this expression is exactly the same of the following line 

const circle = new Circle(10);



//Adding and removing property

/*we have a circle object, 
this object in javascript are dynamic, tath means, after you create them you can 
add extra properties in them or delete some properties

why this is useful in the real world?

imagine you're working with a user object, the client that can be a web or a mobile 
application is going to send a user object to the server.
On the server we get this user object and then we add additional stuff to it. 
 */


 //in c++ and othe language, for change properties, we can go back and change our class


circle.location={x:1}; //dot notations

//we also have another notation for accessin properties
//bracket notations
circle['location']={x:1}; //is the same of the line 32
//bracket notations is useful when i want to dynamically access a property name
 
const propertyName = 'location'; 


//for dynamically delete one or more properties from an object 

//delete circle.location      //dot notation
//delete  circle['location']; //bracket notation


//enumerating properties 

for(let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key);  //this will print radius and location
}

const keys= Object.keys(circle); //this return all the keys in the circle as an array
console.log(keys); //this will print an array with property and functiion

if('radius' in circle)
    console.log("si radius sta in circle")







