/*In javascript we have two categories of types

1-> value types, also called primitives

    -Number
    -String
    -Boolean
    -Symbol
    -undefined
    -nulll

2-> reference types

    -Object
    -Function
    -Array

*/

let x=10;
let y=x;
x=20;

//this two variable is indipendent of each other

//what happens if we use a reference type or an object here 

let x1={value:10}  //x1 is an object type
let y1=x1;
x1.value=20;

//OBSERVATION
//primitive are copied by their value, and Objects are copied by their reference
