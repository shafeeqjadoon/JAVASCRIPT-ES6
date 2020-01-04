"use strict"

//      template literals
let name = "Shafeeq";

function makeUppercase(word){
  return word.toUpperCase();
}

// with back ticks we can use multiple lines,functions
// variables and multiple lines and lots of other things with back ticks

let template = `<h1>${makeUppercase("Hello")}, ${name}</h1>
                <p>This is a simple paragraph</p>`;

document.getElementById("template").innerHTML = template;



// "use strict"
//
// let name = 'John';
//
// function makeUppercase(word){
//   return word.toUpperCase();
// }
//
// let template =
// `<h1>${makeUppercase('Hello')}, ${name}</h1>
// <p>This is a simple template in JavaScript</p>`;
//
// document.getElementById('template').innerHTML = template;
