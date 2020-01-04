"use strict"



let myArray = [11,22,34,65,34];

let mySet = new Set(myArray);

// console.log(mySet);

//adding differenct data types
mySet.add("100");
mySet.add({a: 1, b: 2});

//deleting something
mySet.delete(11);

//clearing something
// mySet.clear();

//adding to empty set
mySet.add("100");


//length of set
// console.log(mySet.size);


//looping through a set
//
// mySet.forEach(function(val){
//   console.log(val);
// });


/*
let myMap = new Map([['a1','Hello'],['b2','Goodbye']]);
console.log(myMap);
myMap.set('c3','Foo');
myMap.delete('a1');

console.log(myMap.size);
*/

//weak sets related to objects
/*
let carWeakSet = new WeakSet();

let car1 = {
  make: "Honda",
  model: "Civic"
}


let newSet = new Set();
newSet.add(car1);
console.log(newSet);

carWeakSet.add(car1);

let car2 = {
  make: "Toyota",
  model: "Camry"
}
carWeakSet.add(car2);
carWeakSet.delete(car1);
console.log(carWeakSet);
*/



//weak maps related to objects



/*
let carWeakMap = new WeakMap();

let key1 = {
  id : 1
}

let car1 = {
  make: "Honda",
  model: "Civic"
}
let key2 = {
  id : 2
}

let car2 = {
  make: "Toyota",
  model: "Camry"
}
carWeakMap.set(key1,car1);
carWeakMap.set(key2,car2);
console.log(carWeakMap);
*/
