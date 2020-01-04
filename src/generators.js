"use strict"

function *g1(){
  console.log("hello");
  yield "Yeild 1 ran ..";
  console.log("World");
  yield "yeild 2 ran ..";
  return "returned";
}

var g = g1();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
//

for(let val of g){
  console.log(val);
}
