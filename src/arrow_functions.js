"use strict"
//arrow functions benefits
//shorter syntax
//allow you to bind this lexically
//
// let add = function(a,b){
//   let sum = a + b;
//   console.log(sum);
//   return false;
// }
// add(2,3);

let add = (a,b) => {
  let sum = a + b;
  console.log(sum);
  return false
}
add(4,6);
