"use strict"


// Default Parameter

function greet($greeting =  "Hello World"){
  console.log($greeting);
}
greet("Hello");
greet();



let args1 = [1,2,3];
let args2 = [4,5,6];
function test(){
  console.log(args1+" "+args2);
}
//using the spred operator
//test.apply(null,args);


//without using the spread operator
test(...args1,...args2);
