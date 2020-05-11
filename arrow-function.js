// Date: 5/11/2020

// let hi = (argument) => {console.log('howdy');}
// hi();

// let hi = (name) => {console.log(`howdy ${name}`)};
// hi('bob');

// Return 

// let add = (a, b) => {return a+b };
// console.log(add(7,3));

// The map() method in JavaScript creates an array 
// by calling a specific function 
// on each element present in the parent array.

// let names = ['david', 'eddie', 'alex', 'michael'];
// names.map( (name) => console.log(`howdy ${name}!`))


// let names = ['david', 'eddie', 'alex', 'michael'];
// let i = 0;
// names.map((name) => {i++; console.log(`howdy ${name} ${i} !`);});

let names = ['david', 'eddie', 'alex', 'michael'];

var tranformed = names.map((name)=> {return `howdy ${name}!`}) 

console.log(tranformed);